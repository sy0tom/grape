import { AmateurFilterSettingsRepository } from "#/repositories";
import { AmateurFilter } from "#/types";
import { VideoFilterSettingsService } from "./VideoFilterSettingsService";

export function createAmateurFilterSettingsService(
  repository: AmateurFilterSettingsRepository,
): VideoFilterSettingsService<AmateurFilter> {
  const getAll = async (): Promise<AmateurFilter[]> => {
    return (await repository.getAll()) ?? [];
  };

  return {
    getAll: async (): Promise<AmateurFilter[]> => await getAll(),
    save: async (data: AmateurFilter): Promise<void> => repository.save(data),
    delete: async (id: string): Promise<void> => repository.delete(id),
  };
}

export type AmateurFilterSettingsService = ReturnType<
  typeof createAmateurFilterSettingsService
>;
