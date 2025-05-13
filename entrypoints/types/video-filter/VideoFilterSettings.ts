export type UserVideoFilterSettings = {
  isActive: boolean;
  avFilters: VideoFilter[];
  amateurFilters: VideoFilter[];
  animeFilters: VideoFilter[];
};

export type VideoFilter = {
  id: string;
  name: string;
  params?: {
    mediaOption?: string;
    qualityOption: string;
    priceOption: string;
    releaseOption?: string;
    sortOption: string;
    keywords?: string[];
  };
};

export type Filter = {
  label: string;
  options: Option[];
};

export type Option = {
  label: string;
  value: string;
};
