import { VideoFilterSettingsRepository } from "#/domain";
import { VideoFilter } from "#/types";
import { commonEntityRepository } from "./base/CommonEntityRepository";

export function createAnimeFilterSettingsRepository(): VideoFilterSettingsRepository {
  const schema = "local:AnimeFilter" as const;
  const repository = commonEntityRepository<VideoFilter>(schema);

  return {
    getAll: async (): Promise<VideoFilter[] | null> => repository.getAll(),
    save: async (data: VideoFilter): Promise<void> => repository.save(data),
    delete: async (id: string): Promise<void> => repository.delete(id),
  };
}
