import { v4 as uuid } from "uuid";
import { createLocalStorageClient, Schema } from "../StorageClient";

interface Entity {
  id: string;
}

export const commonEntityRepository = <T extends Entity>(schema: Schema) => {
  const client = createLocalStorageClient<T[]>(schema);

  const getData = async (): Promise<T[] | null> => {
    return client.getAll();
  };

  const getDataNonNull = async (): Promise<T[]> => {
    return (await getData()) ?? [];
  };

  const checkExists = (id: string, entities: T[]) => {
    const exists = entities.find((entity) => entity.id === id);
    if (!exists) {
      throw new Error(`Entity with id ${id} does not exists.`);
    }
  };

  const getDataNonNullAndCheckExists = async (id: string): Promise<T[]> => {
    const entities = await getDataNonNull();
    checkExists(id, entities);
    return entities;
  };

  return {
    getAll: async (): Promise<T[] | null> => {
      return getData();
    },

    save: async (data: T) => {
      const entities = await getDataNonNull();

      if (!data.id) {
        data.id = uuid();
        return client.save([...entities, data]);
      }

      checkExists(data.id, entities);

      return client.save(
        entities.map((entity) => (entity.id === data.id ? data : entity)),
      );
    },

    delete: async (id: string) => {
      const entities = await getDataNonNullAndCheckExists(id);
      return client.save(entities.filter((entity) => entity.id !== id));
    },
  };
};
