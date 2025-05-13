import { FeatureActivation } from "#/types";
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

    save: (model: FeatureActivation) => save(model),

    saveVideoFilterActivate: async (model: boolean) => {
      const command = await get();
      console.log(`videoFilter is ${command.videoFilter}`);
      console.log(`videoFilter to be${model}`);
      save({ ...command, videoFilter: model });
    },
  };
}

export type FeatureActivationService = ReturnType<
  typeof createFeatureActivationService
>;
