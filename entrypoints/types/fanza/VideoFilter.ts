import { MediaType } from "./MediaType";
import { Price } from "./Price";
import { Quality } from "./Quality";
import { Release } from "./Release";
import { Sort } from "./Sort";

export interface VideoFilter {
  name: string;
  mediaType: MediaType;
  quality: Quality;
  price: Price;
  release: Release;
  sort: Sort;
  keywords?: string[];
}
