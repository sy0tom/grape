import {
  AmateurFilterSettingsRepository,
  AnimeFilterSettingsRepository,
  AvFilterSettingsRepository,
} from "#/repositories";
import { VideoFilter } from "#/types";

export function createVideoFilterSettingsService(
  repository:
    | AvFilterSettingsRepository
    | AmateurFilterSettingsRepository
    | AnimeFilterSettingsRepository,
) {
  const getAll = async (): Promise<VideoFilter[]> => {
    return (await repository.getAll()) ?? [];
  };

  return {
    getAll: async (): Promise<VideoFilter[]> => await getAll(),
    save: async (data: VideoFilter): Promise<void> => repository.save(data),
    delete: async (id: string): Promise<void> => repository.delete(id),
  };
}

export type VideoFilterSettingsService = ReturnType<
  typeof createVideoFilterSettingsService
>;
