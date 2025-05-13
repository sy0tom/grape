import { VideoFilter } from "#/types";
import { VideoFilterSettingsRepository } from "./VideoFilterSettingsRepository";

export function createVideoFilterSettingsService(
  repository: VideoFilterSettingsRepository,
) {
  return {
    getAll: async (): Promise<VideoFilter[]> => {
      return (await repository.getAll()) ?? [];
    },

    save: async (form: VideoFilter): Promise<void> => {
      return repository.save(form);
    },

    delete: async (id: string): Promise<void> => {
      return repository.delete(id);
    },
  };
}

export type VideoFilterSettingsService = ReturnType<
  typeof createVideoFilterSettingsService
>;
