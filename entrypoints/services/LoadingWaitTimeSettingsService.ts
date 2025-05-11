import { LoadingWaitTimeSettingsRepository } from "#/repositories/LoadingWaitTimeSettingsRepository";
import { LoadingWaitTimeSettings } from "#/types";

export function createLoadingWaitTimeSettingsService(
  repository: LoadingWaitTimeSettingsRepository,
) {
  const get = async (): Promise<LoadingWaitTimeSettings | null> => {
    return repository.get();
  };

  return {
    get: async (): Promise<LoadingWaitTimeSettings> => {
      const settings = await get();
      return settings ?? {};
    },

    save: async (
      settings: LoadingWaitTimeSettings,
    ): Promise<LoadingWaitTimeSettings> => {
      await repository.save(settings);
      const newSettings = await repository.get();

      if (newSettings) {
        return newSettings;
      }

      throw new Error("Failed to save settings");
    },
  };
}

export type LoadingWaitTimeSettingsService = ReturnType<
  typeof createLoadingWaitTimeSettingsService
>;
