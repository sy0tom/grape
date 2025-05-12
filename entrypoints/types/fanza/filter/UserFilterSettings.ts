import { VideoFilter } from "./VideoFilter";

export interface UserFilterSettings {
  avFilters: VideoFilter[];
  amateurFilters: VideoFilter[];
  animeFilters: VideoFilter[];
}
