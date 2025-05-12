import { Option, OptionFilterConfig } from "./VideoFilter";

const mediaTypeOptions: Option[] = [
  { label: "全て", value: " " },
  { label: "2D", value: "media_type=2d" },
  { label: "VR", value: "media_type=vr" },
] as const;

const qualityOptions: Option[] = [
  { label: "全て", value: " " },
  { label: "ストリーミング", value: "max_quality=various" },
  { label: "ダウンロード", value: "max_quality=sd" },
  { label: "HD版ダウンロード", value: "max_quality=hd" },
  { label: "8KVR版ダウンロード", value: "max_quality=8k" },
] as const;

const priceOptions: Option[] = [
  { label: "全て", value: " " },
  { label: "300円以下", value: "price_min=300" },
  { label: "500円以下", value: "price_min=500" },
  { label: "1000円以下", value: "price_min=1000" },
  { label: "2000円以下", value: "price_min=2000" },
  { label: "2001円以上", value: "price_max=2001" },
] as const;

const releaseOptions: Option[] = [
  { label: "全て", value: " " },
  { label: "最新作", value: "release=latest" },
  { label: "準新作", value: "release=recent" },
  { label: "予約", value: "release=reservation" },
] as const;

const sortOptions: Option[] = [
  { label: "おすすめ順", value: "sort=suggest" },
  { label: "人気順", value: "sort=ranking" },
  { label: "売上本数順", value: "sort=saleranking_asc" },
  { label: "新着順", value: "sort=date" },
  { label: "評価の高い順", value: "sort=review_rank" },
  { label: "お気に入り数順", value: "sort=bookmark_desc" },
  { label: "価格の安い順", value: "sort=price_asc" },
  { label: "商品発売日順", value: "sort=release_date" },
] as const;

export const avOptionFilterConfig: OptionFilterConfig = {
  mediaFilter: { label: "2D/VR", options: mediaTypeOptions },
  qualityFilter: { label: "配信形式", options: qualityOptions },
  priceFilter: { label: "価格", options: priceOptions },
  releaseFilter: { label: "配信開始日", options: releaseOptions },
  sortFilter: { label: "ソート", options: sortOptions },
};
