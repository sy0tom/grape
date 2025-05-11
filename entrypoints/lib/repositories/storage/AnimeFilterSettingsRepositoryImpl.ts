import { AnimeFilterSettingsRepository } from "#/repositories/AnimeFilterSettingsRepository";
import { AnimeFilter } from "#/types";
import { commonEntityRepository } from "./base/CommonEntityRepository";

export function createAnimeFilterSettingsRepository(): AnimeFilterSettingsRepository {
  const schema = "local:AmateurFilter" as const;
  const repository = commonEntityRepository<AnimeFilter>(schema);

  return {
    getAll: async (): Promise<AnimeFilter[] | null> => repository.getAll(),
    save: async (data: AnimeFilter): Promise<void> => repository.save(data),
    delete: async (id: string): Promise<void> => repository.delete(id),
  };
}
