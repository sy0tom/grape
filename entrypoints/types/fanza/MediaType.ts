export const mediaTypeOptions = [
  { value: "media_type=2d", label: "2D" },
  { value: "media_type=vr", label: "VR" },
] as const;

export type MediaType = (typeof mediaTypeOptions)[number]["value"];
