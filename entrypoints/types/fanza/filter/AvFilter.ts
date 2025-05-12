import { Option, OptionFilterConfig } from "./VideoFilter";

const mediaTypeOptions: Option[] = [
  { label: "全て", key: "media_type", value: " " },
  { label: "2D", key: "media_type", value: "2d" },
  { label: "VR", key: "media_type", value: "vr" },
] as const;

const qualityOptions: Option[] = [
  { label: "全て", key: "max_quality", value: " " },
  { label: "ストリーミング", key: "max_quality", value: "various" },
  { label: "ダウンロード", key: "max_quality", value: "sd" },
  { label: "HD版ダウンロード", key: "max_quality", value: "hd" },
  { label: "8KVR版ダウンロード", key: "max_quality", value: "8k" },
] as const;

const priceOptions: Option[] = [
  { label: "全て", key: "price_min", value: " " },
  { label: "300円以下", key: "price_min", value: "300" },
  { label: "500円以下", key: "price_min", value: "500" },
  { label: "1000円以下", key: "price_min", value: "1000" },
  { label: "2000円以下", key: "price_min", value: "price_min=2000" },
  { label: "2001円以上", key: "price_max", value: "price_max=2001" },
] as const;

const releaseOptions: Option[] = [
  { label: "全て", key: "release", value: " " },
  { label: "最新作", key: "release", value: "latest" },
  { label: "準新作", key: "release", value: "recent" },
  { label: "予約", key: "release", value: "reservation" },
] as const;

const sortOptions: Option[] = [
  { label: "おすすめ順", key: "sort", value: "suggest" },
  { label: "人気順", key: "sort", value: "ranking" },
  { label: "売上本数順", key: "sort", value: "saleranking_asc" },
  { label: "新着順", key: "sort", value: "date" },
  { label: "評価の高い順", key: "sort", value: "review_rank" },
  { label: "お気に入り数順", key: "sort", value: "bookmark_desc" },
  { label: "価格の安い順", key: "sort", value: "price_asc" },
  { label: "商品発売日順", key: "sort", value: "release_date" },
] as const;

export const avOptionFilterConfig: OptionFilterConfig = {
  mediaFilter: { label: "2D/VR", options: mediaTypeOptions },
  qualityFilter: { label: "配信形式", options: qualityOptions },
  priceFilter: { label: "価格", options: priceOptions },
  releaseFilter: { label: "配信開始日", options: releaseOptions },
  sortFilter: { label: "ソート", options: sortOptions },
};
