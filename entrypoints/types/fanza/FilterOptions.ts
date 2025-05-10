import { mediaTypeOptions } from "./MediaType";
import { priceOptions } from "./Price";
import { qualityOptions } from "./Quality";
import { releaseOptions } from "./Release";
import { sortOptions } from "./Sort";

export const filterOptions = {
  mediaTypes: mediaTypeOptions,
  prices: priceOptions,
  qualities: qualityOptions,
  releases: releaseOptions,
  sorts: sortOptions,
} as const;
