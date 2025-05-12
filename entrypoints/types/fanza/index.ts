import { AmateurFilter } from "./filter/AmateurFilter";
import { AnimeFilter } from "./filter/AnimeFilter";
import { AvFilter } from "./filter/AvFilter";

export {
  AmateurFilterConfig,
  type AmateurFilter,
} from "./filter/AmateurFilter";
export { AnimeFilterConfig, type AnimeFilter } from "./filter/AnimeFilter";
export { AvFilterConfig, type AvFilter } from "./filter/AvFilter";
export { UserFilterSettings } from "./filter/UserFilterSettings";
export { InjectWaitTime } from "./wait-time/InjectWaitTime";
export { LoadingWaitTimeSettings } from "./wait-time/LoadingWaitTimeSettings";
export type VideoFilter = AmateurFilter | AnimeFilter | AvFilter;
