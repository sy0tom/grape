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
