import { Option, OptionFilterConfig } from "./VideoFilter";
const qualityOptions: Option[] = [
  { label: "全て", value: " " },
  { label: "ストリーミング", value: "max_quality=various" },
  { label: "ダウンロード", value: "max_quality=sd" },
  { label: "HD版ダウンロード", value: "max_quality=hd" },
] as const;

const priceOptions: Option[] = [
  { label: "全て", value: " " },
  { label: "300円以下", value: "price_min=300" },
  { label: "500円以下", value: "price_min=500" },
  { label: "1000円以下", value: "price_min=1000" },
  { label: "2000円以下", value: "price_min=2000" },
  { label: "2001円以上", value: "price_max=2001" },
] as const;

const sortOptions: Option[] = [
  { label: "人気順", value: "sort=ranking" },
  { label: "売上本数順", value: "sort=saleranking_asc" },
  { label: "新着順", value: "sort=date" },
  { label: "評価の高い順", value: "sort=review_rank" },
  { label: "お気に入り数順", value: "sort=bookmark_desc" },
  { label: "価格の安い順", value: "sort=price_asc" },
] as const;

export const animeOptionFilterConfig: OptionFilterConfig = {
  priceFilter: { label: "価格", options: priceOptions },
  qualityFilter: { label: "配信形式", options: qualityOptions },
  sortFilter: { label: "ソート", options: sortOptions },
};
