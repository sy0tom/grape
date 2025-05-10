export const releaseOptions = [
  { value: "", label: "全て" },
  { value: "release=latest", label: "最新作" },
  { value: "release=recent", label: "準新作" },
  { value: "release=reservation", label: "予約" },
] as const;

export type Release = (typeof releaseOptions)[number]["value"];
