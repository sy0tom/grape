import { createFeatureActivationService } from "#/domain";
import { createFeatureActivationRepository } from "#/lib";

const featureActivateRepository = createFeatureActivationRepository();
export const featureActivateService = createFeatureActivationService(
  featureActivateRepository,
);
