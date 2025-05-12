import { Option, OptionFilterConfig } from "./VideoFilter";

const qualityOptions: Option[] = [
  { label: "全て", key: "max_quality", value: " " },
  { label: "ストリーミング", key: "max_quality", value: "various" },
  { label: "ダウンロード", key: "max_quality", value: "sd" },
  { label: "HD版ダウンロード", key: "max_quality", value: "hd" },
  { label: "4k版ダウンロード", key: "max_quality", value: "4k" },
] as const;

const priceOptions: Option[] = [
  { label: "全て", key: "price_min", value: " " },
  { label: "300円以下", key: "price_min", value: "300" },
  { label: "500円以下", key: "price_min", value: "500" },
  { label: "1000円以下", key: "price_min", value: "1000" },
  { label: "1001円以上", key: "price_max", value: "1001" },
] as const;

const sortOptions: Option[] = [
  { label: "人気順", key: "sort", value: "ranking" },
  { label: "売上本数順", key: "sort", value: "saleranking_asc" },
  { label: "新着順", key: "sort", value: "date" },
  { label: "評価の高い順", key: "sort", value: "review_rank" },
  { label: "お気に入り数順", key: "sort", value: "bookmark_desc" },
  { label: "価格の安い順", key: "sort", value: "price_asc" },
] as const;

export const amateurOptionFilterConfig: OptionFilterConfig = {
  priceFilter: { label: "価格", options: priceOptions },
  qualityFilter: { label: "配信形式", options: qualityOptions },
  sortFilter: { label: "ソート", options: sortOptions },
};
