export type FeatureActivationCommand = {
  videoFilter?: boolean;
};

export type FeatureActivation = {
  videoFilter: boolean;
};

export type FeatureActivationType =
  | FeatureActivation
  | FeatureActivationCommand;
