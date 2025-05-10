export const priceOptions = [
  { value: "", label: "全て" },
  { value: "price_min=300", label: "300円以下" },
  { value: "price_min=500", label: "500円以下" },
  { value: "price_min=1000", label: "1000円以下" },
  { value: "price_min=2000", label: "2000円以下" },
  { value: "price_max=2001", label: "2001円以上" },
] as const;

export type Price = (typeof priceOptions)[number]["value"];
