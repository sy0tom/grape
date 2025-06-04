import { Activation, FeatureActivation } from "#/types2";
import { FeatureActivationRepository } from "./FeatureActivationRepository";

export function createFeatureActivationService(
  repository: FeatureActivationRepository,
) {
  const get = async (): Promise<FeatureActivation> => {
    const command = await repository.get();
    return {
      videoFilter:
        command?.videoFilter === undefined ? true : command.videoFilter,
    };
  };

  const save = async (model: FeatureActivation) => repository.save(model);

  return {
    get: async (): Promise<FeatureActivation> => get(),

    save: async (data: Activation) => {
      const command = await get();
      save({ ...command, ...data });
    },
  };
}

export type FeatureActivationService = ReturnType<
  typeof createFeatureActivationService
>;
