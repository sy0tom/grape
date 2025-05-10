export const mediaTypeOptions = [
  { label: "全て", value: " " },
  { label: "2D", value: "media_type=2d" },
  { label: "VR", value: "media_type=vr" },
] as const;

export type MediaType = (typeof mediaTypeOptions)[number]["value"];
