import { AnimeFilterSettingsRepository } from "#/repositories";
import { AnimeFilter } from "#/types";
import { VideoFilterSettingsService } from "./VideoFilterSettingsService";

export function createAnimeFilterSettingsService(
  repository: AnimeFilterSettingsRepository,
): VideoFilterSettingsService<AnimeFilter> {
  const getAll = async (): Promise<AnimeFilter[]> => {
    return (await repository.getAll()) ?? [];
  };

  return {
    getAll: async (): Promise<AnimeFilter[]> => await getAll(),
    save: async (data: AnimeFilter): Promise<void> => repository.save(data),
    delete: async (id: string): Promise<void> => await repository.delete(id),
  };
}

export type AnimeFilterSettingsService = ReturnType<
  typeof createAnimeFilterSettingsService
>;
