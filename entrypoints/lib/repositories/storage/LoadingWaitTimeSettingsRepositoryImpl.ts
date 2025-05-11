import { LoadingWaitTimeSettingsRepository } from "#/repositories/LoadingWaitTimeSettingsRepository";
import { LoadingWaitTimeSettings } from "#/types";
import { createLocalStorageClient } from "./StorageClient";

export function createLoadingWaitTimeSettingsRepository(): LoadingWaitTimeSettingsRepository {
  const schema = "local:LoadingWaitTimeSettings" as const;
  const client = createLocalStorageClient<LoadingWaitTimeSettings>(schema);

  return {
    get: async (): Promise<LoadingWaitTimeSettings | null> => {
      return client.getAll();
    },

    save: async (data: LoadingWaitTimeSettings): Promise<void> => {
      await client.save(data);
    },
  };
}
