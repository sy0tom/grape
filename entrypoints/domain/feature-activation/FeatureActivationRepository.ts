import {
  FeatureActivation,
  FeatureActivationCommand,
} from "#/types/FeatureActivation";

export interface FeatureActivationRepository {
  get(): Promise<FeatureActivationCommand | null>;
  save(data: FeatureActivation): Promise<void>;
}
