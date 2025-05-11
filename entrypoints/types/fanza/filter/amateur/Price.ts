export const priceOptions = [
  { label: "全て", value: " " },
  { label: "300円以下", value: "price_min=300" },
  { label: "500円以下", value: "price_min=500" },
  { label: "1000円以下", value: "price_min=1000" },
  { label: "1001円以上", value: "price_max=1001" },
] as const;

export type Price = (typeof priceOptions)[number]["value"];
