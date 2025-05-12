import { AmateurFilter } from "./AmateurFilter";
import { AnimeFilter } from "./AnimeFilter";
import { AvFilter } from "./AvFilter";

export interface UserFilterSettings {
  avFilters: AvFilter[];
  amateurFilters: AmateurFilter[];
  animeFilters: AnimeFilter[];
}
