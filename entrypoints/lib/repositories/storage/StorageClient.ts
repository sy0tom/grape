export type Schema =
  | "local:AvFilter"
  | "local:AmateurFilter"
  | "local:AnimeFilter"
  | "local:LoadingWaitTimeSettings";

export function createLocalStorageClient<T>(schema: Schema) {
  return {
    getAll: async (): Promise<T | null> => {
      return storage.getItem(schema);
    },

    save: async (t: T): Promise<void> => {
      return storage.setItem(schema, t);
    },
  };
}
