import { FilterSettingsRepository } from "#/repositories/FilterSettingsRepository";
import { FilterSettings } from "#/types";

export function createFilterSettingsService(
  repository: FilterSettingsRepository,
) {
  const get = async (): Promise<FilterSettings | null> => {
    return repository.get();
  };

  return {
    get: async (): Promise<FilterSettings> => {
      const settings = await get();
      return settings ?? {};
    },

    save: async (settings: FilterSettings): Promise<FilterSettings> => {
      await repository.save(settings);
      const newSettings = await repository.get();

      if (newSettings) {
        return newSettings;
      }

      throw new Error("Failed to save settings");
    },
  };
}
