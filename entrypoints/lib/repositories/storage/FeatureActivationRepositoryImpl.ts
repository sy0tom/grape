import { FeatureActivationRepository } from "#/domain/feature-activation/FeatureActivationRepository";
import { FeatureActivationCommand } from "#/types";
import { createLocalStorageClient } from "./StorageClient";

export function createFeatureActivationRepository(): FeatureActivationRepository {
  const schema = "local:FeatureActivation" as const;
  const client = createLocalStorageClient<FeatureActivationCommand>(schema);

  return {
    get: async (): Promise<FeatureActivationCommand | null> => {
      return client.getAll();
    },

    save: async (model: FeatureActivationCommand): Promise<void> => {
      await client.save(model);
    },
  };
}
