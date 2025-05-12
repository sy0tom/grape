import { BaseFilter, BaseFilterParams } from "./BaseFilter";

export const qualityOptions = [
  { label: "全て", value: " " },
  { label: "ストリーミング", value: "max_quality=various" },
  { label: "ダウンロード", value: "max_quality=sd" },
  { label: "HD版ダウンロード", value: "max_quality=hd" },
  { label: "4k版ダウンロード", value: "max_quality=4k" },
] as const;

type Quality = (typeof qualityOptions)[number]["value"];

export const priceOptions = [
  { label: "全て", value: " " },
  { label: "300円以下", value: "price_min=300" },
  { label: "500円以下", value: "price_min=500" },
  { label: "1000円以下", value: "price_min=1000" },
  { label: "1001円以上", value: "price_max=1001" },
] as const;

type Price = (typeof priceOptions)[number]["value"];

export const sortOptions = [
  { label: "人気順", value: "sort=ranking" },
  { label: "売上本数順", value: "sort=saleranking_asc" },
  { label: "新着順", value: "sort=date" },
  { label: "評価の高い順", value: "sort=review_rank" },
  { label: "お気に入り数順", value: "sort=bookmark_desc" },
  { label: "価格の安い順", value: "sort=price_asc" },
] as const;

type Sort = (typeof sortOptions)[number]["value"];

export const AmateurFilterConfig = {
  filterOptions: {
    prices: priceOptions,
    qualities: qualityOptions,
    sorts: sortOptions,
  },
};

export type AmateurFilter = BaseFilter<AmateurFilterParams>;

type AmateurFilterParams = BaseFilterParams & {
  quality: Quality;
  price: Price;
  sort: Sort;
};
