import { VideoFilter } from "#/types";

export interface VideoFilterSettingsRepository {
  getAll: () => Promise<VideoFilter[] | null>;

  save: (data: VideoFilter) => Promise<void>;

  delete: (id: string) => Promise<void>;
}
