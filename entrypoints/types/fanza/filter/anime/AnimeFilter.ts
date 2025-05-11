import { BaseFilter } from "../BaseFilter";
import { Price, priceOptions } from "./Price";
import { Quality, qualityOptions } from "./Quality";
import { Sort, sortOptions } from "./Sort";

export interface AnimeFilter extends BaseFilter {
  quality: Quality;
  price: Price;
  sort: Sort;
}

export const AnimeFilterConfig = {
  filterOptions: {
    prices: priceOptions,
    qualities: qualityOptions,
    sorts: sortOptions,
  },
};
