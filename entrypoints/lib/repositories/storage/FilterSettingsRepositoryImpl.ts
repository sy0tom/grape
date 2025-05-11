import { FilterSettingsRepository } from "#/repositories/FilterSettingsRepository";
import { FilterSettings } from "#/types";
import { createLocalStorageClient } from "./StorageClient";

export function createFilterSettingsRepository(): FilterSettingsRepository {
  const schema = "local:FilterSettings" as const;
  const client = createLocalStorageClient<FilterSettings>(schema);
  return {
    get: async (): Promise<FilterSettings | null> => {
      return client.get();
    },

    save: async (data: FilterSettings): Promise<void> => {
      return client.save(data);
    },
  };
}
