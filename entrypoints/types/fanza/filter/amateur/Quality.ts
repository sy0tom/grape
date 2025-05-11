export const qualityOptions = [
  { label: "全て", value: " " },
  { label: "ストリーミング", value: "max_quality=various" },
  { label: "ダウンロード", value: "max_quality=sd" },
  { label: "HD版ダウンロード", value: "max_quality=hd" },
  { label: "4k版ダウンロード", value: "max_quality=4k" },
] as const;

export type Quality = (typeof qualityOptions)[number]["value"];
