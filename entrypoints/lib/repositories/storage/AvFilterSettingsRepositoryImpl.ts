import { AvFilterSettingsRepository } from "#/repositories/AvFilterSettingsRepository";
import { AvFilter } from "#/types";
import { commonEntityRepository } from "./base/CommonEntityRepository";

export function createAvFilterSettingsRepository(): AvFilterSettingsRepository {
  const schema = "local:AvFilter" as const;
  const repository = commonEntityRepository<AvFilter>(schema);

  return {
    getAll: async (): Promise<AvFilter[] | null> => repository.getAll(),
    save: async (data: AvFilter): Promise<void> => repository.save(data),
    delete: async (id: string): Promise<void> => repository.delete(id),
  };
}
