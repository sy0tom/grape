import { AvFilterSettingsRepository } from "#/repositories";
import { AvFilter } from "#/types";
import { VideoFilterSettingsService } from "./VideoFilterSettingsService";

export function createAvFilterSettingsService(
  repository: AvFilterSettingsRepository,
): VideoFilterSettingsService<AvFilter> {
  const getAll = async (): Promise<AvFilter[]> => {
    return (await repository.getAll()) ?? [];
  };

  return {
    getAll: async (): Promise<AvFilter[]> => await getAll(),
    save: async (data: AvFilter): Promise<void> => await repository.save(data),
    delete: async (id: string): Promise<void> => await repository.delete(id),
  };
}

export type AvFilterSettingsService = ReturnType<
  typeof createAvFilterSettingsService
>;
