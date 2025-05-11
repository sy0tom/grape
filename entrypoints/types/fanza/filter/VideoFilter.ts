import { AmateurFilter } from "./amateur";
import { AnimeFilter } from "./anime";
import { AvFilter } from "./av";

export type VideoFilter = AvFilter | AmateurFilter | AnimeFilter;
