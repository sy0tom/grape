import { VideoFilterSettingsRepository } from "#/domain/video-filter/VideoFilterSettingsRepository";
import { VideoFilter } from "#/types";
import { commonEntityRepository } from "./base/CommonEntityRepository";

export function createAvFilterSettingsRepository(): VideoFilterSettingsRepository {
  const schema = "local:AvFilter" as const;
  const repository = commonEntityRepository<VideoFilter>(schema);

  return {
    getAll: async (): Promise<VideoFilter[] | null> => repository.getAll(),
    save: async (data: VideoFilter): Promise<void> => repository.save(data),
    delete: async (id: string): Promise<void> => repository.delete(id),
  };
}
