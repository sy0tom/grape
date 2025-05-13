import { FeatureActivation } from "#/types";
import { FeatureActivationRepository } from "./FeatureActivationRepository";

export function createFeatureActivationService(
  repository: FeatureActivationRepository,
) {
  return {
    get: async (): Promise<FeatureActivation> => {
      const command = await repository.get();
      return {
        videoFilter:
          command?.videoFilter === undefined ? true : command.videoFilter,
      };
    },
    save: (model: FeatureActivation) => repository.save(model),
  };
}

export type FeatureActivationService = ReturnType<
  typeof createFeatureActivationService
>;
