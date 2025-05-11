export const releaseOptions = [
  { label: "全て", value: " " },
  { label: "最新作", value: "release=latest" },
  { label: "準新作", value: "release=recent" },
  { label: "予約", value: "release=reservation" },
] as const;

export type Release = (typeof releaseOptions)[number]["value"];
