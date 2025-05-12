import { BaseFilter, BaseFilterParams } from "./BaseFilter";

export const mediaTypeOptions = [
  { label: "全て", value: " " },
  { label: "2D", value: "media_type=2d" },
  { label: "VR", value: "media_type=vr" },
] as const;

export type MediaType = (typeof mediaTypeOptions)[number]["value"];

export const qualityOptions = [
  { label: "全て", value: " " },
  { label: "ストリーミング", value: "max_quality=various" },
  { label: "ダウンロード", value: "max_quality=sd" },
  { label: "HD版ダウンロード", value: "max_quality=hd" },
  { label: "4k版ダウンロード", value: "max_quality=4k" },
  { label: "8KVR版ダウンロード", value: "max_quality=8k" },
] as const;

export type Quality = (typeof qualityOptions)[number]["value"];

export const priceOptions = [
  { label: "全て", value: " " },
  { label: "300円以下", value: "price_min=300" },
  { label: "500円以下", value: "price_min=500" },
  { label: "1000円以下", value: "price_min=1000" },
  { label: "2000円以下", value: "price_min=2000" },
  { label: "2001円以上", value: "price_max=2001" },
] as const;

export type Price = (typeof priceOptions)[number]["value"];

export const releaseOptions = [
  { label: "全て", value: " " },
  { label: "最新作", value: "release=latest" },
  { label: "準新作", value: "release=recent" },
  { label: "予約", value: "release=reservation" },
] as const;

export type Release = (typeof releaseOptions)[number]["value"];

export const sortOptions = [
  { label: "おすすめ順", value: "sort=suggest" },
  { label: "人気順", value: "sort=ranking" },
  { label: "売上本数順", value: "sort=saleranking_asc" },
  { label: "新着順", value: "sort=date" },
  { label: "評価の高い順", value: "sort=review_rank" },
  { label: "お気に入り数順", value: "sort=bookmark_desc" },
  { label: "価格の安い順", value: "sort=price_asc" },
  { label: "商品発売日順", value: "sort=release_date" },
] as const;

export type Sort = (typeof sortOptions)[number]["value"];

export const AvFilterConfig = {
  filterOptions: {
    mediaTypes: mediaTypeOptions,
    prices: priceOptions,
    qualities: qualityOptions,
    releases: releaseOptions,
    sorts: sortOptions,
  },
};

export type AvFilter = BaseFilter<AvFilterParams>;

type AvFilterParams = BaseFilterParams & {
  mediaType: MediaType;
  quality: Quality;
  price: Price;
  release: Release;
  sort: Sort;
};
