import { AmateurFilterSettingsRepository } from "#/repositories/AmateurFilterSettingsRepository";
import { AmateurFilter } from "#/types";
import { commonEntityRepository } from "./base/CommonEntityRepository";

export function createAmateurFilterSettingsRepository(): AmateurFilterSettingsRepository {
  const schema = "local:AmateurFilter" as const;
  const repository = commonEntityRepository<AmateurFilter>(schema);

  return {
    getAll: async (): Promise<AmateurFilter[] | null> => repository.getAll(),
    save: async (data: AmateurFilter): Promise<void> => repository.save(data),
    delete: async (id: string): Promise<void> => repository.delete(id),
  };
}
