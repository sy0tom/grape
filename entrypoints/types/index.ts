import { UIconst } from "#/constants";

export { BackgroundTask } from "./BackgroundTask";

export {
  amateurFilterConfig,
  animeFilterConfig,
  avFilterConfig,
  OptionFilterConfig,
} from "./video-filter/VideoFilterConfig";

export {
  UserVideoFilterSettings,
  VideoFilter,
} from "./video-filter/VideoFilterSettings";

export { LoadingWaitTimeSettings } from "./wait-time/LoadingWaitTimeSettings";

export {
  FeatureActivation,
  FeatureActivationCommand,
  FeatureActivationType,
} from "./FeatureActivation";

export { Filter } from "./video-filter/VideoFilterSettings";

export { GrowingQuiz } from "./quiz/ActressQuiz";

export type VideoFilterType =
  | typeof UIconst.label.avFilter
  | typeof UIconst.label.amateurFilter
  | typeof UIconst.label.animeFilter;
