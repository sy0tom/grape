export const sortOptions = [
  { value: "sort=suggest", label: "おすすめ順" },
  { value: "sort=ranking", label: "人気順" },
  { value: "sort=saleranking_asc", label: "売上本数順" },
  { value: "sort=date", label: "新着順" },
  { value: "sort=review_rank", label: "評価の高い順" },
  { value: "sort=bookmark_desc", label: "お気に入り数順" },
  { value: "sort=price_asc", label: "価格の安い順" },
  { value: "sort=release_date", label: "商品発売日順" },
] as const;

export type Sort = (typeof sortOptions)[number]["value"];
