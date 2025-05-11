import { AmateurFilter } from "./amateur";
import { AnimeFilter } from "./anime";
import { AvFilter } from "./av/AvFilter";

export interface UserFilterSettings {
  avFilters: AvFilter[];
  amateurFilters: AmateurFilter[];
  animeFilters: AnimeFilter[];
}
