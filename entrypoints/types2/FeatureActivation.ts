type videoFilterActivationCommand = {
  videoFilter?: boolean;
};

// type listActivationCommand = {
//   list?: boolean;
// };

export type FeatureActivationCommand = videoFilterActivationCommand;
// & listActivationCommand;

type videoFilterActivation = {
  videoFilter: boolean;
};

// type listActivation = {
//   list: boolean;
// };

export type FeatureActivation = videoFilterActivation;
//  & listActivation;

export type Activation = videoFilterActivation;
//  | listActivation;
