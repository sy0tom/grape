import { MediaType, mediaTypeOptions } from "./MediaType";
import { Price, priceOptions } from "./Price";
import { Quality, qualityOptions } from "./Quality";
import { Release, releaseOptions } from "./Release";
import { Sort, sortOptions } from "./Sort";

export interface AvFilter {
  id: string;
  name: string;
  mediaType: MediaType;
  quality: Quality;
  price: Price;
  release: Release;
  sort: Sort;
  keywords?: string[];
}

export const AvFilterConfig = {
  filterOptions: {
    mediaTypes: mediaTypeOptions,
    prices: priceOptions,
    qualities: qualityOptions,
    releases: releaseOptions,
    sorts: sortOptions,
  },
};
