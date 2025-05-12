export type VideoFilter = {
  id: string;
  name: string;
  params: {
    mediaFilter?: Option[];
    qualityFilter?: Option[];
    priceFilter?: Option[];
    releaseFilter?: Option[];
    sortFilter?: Option[];
    keyword?: string;
  };
};

export type OptionFilterConfig = {
  mediaFilter?: MediaTypeFilter;
  qualityFilter: QualityFilter;
  priceFilter: PriceFilter;
  releaseFilter?: ReleaseFilter;
  sortFilter: SortFilter;
};

export type MediaTypeFilter = Filter & {
  label: "2D/VR";
  options: Option[];
};

export type QualityFilter = Filter & {
  label: "配信形式";
  options: Option[];
};

export type PriceFilter = Filter & {
  label: "価格";
  options: Option[];
};

export type ReleaseFilter = Filter & {
  label: "配信開始日";
  options: Option[];
};

export type SortFilter = Filter & {
  label: "ソート";
};

export type Filter = {
  label: string;
  options: Option[];
};

export type Option = {
  label: string;
  value: string;
};
