export const qualityOptions = [
  { value: "", label: "全て" },
  { value: "max_quality=various", label: "ストリーミング" },
  { value: "max_quality=sd", label: "ダウンロード" },
  { value: "max_quality=hd", label: "HD版ダウンロード" },
  { value: "max_quality=4k", label: "4k版ダウンロード" },
  { value: "max_quality=8k", label: "8KVR版ダウンロード" },
] as const;

export type Quality = (typeof qualityOptions)[number]["value"];
