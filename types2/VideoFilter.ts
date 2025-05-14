type Option = {
  label: string;
  value: string;
};

export type VideoFilterForm = {
  name?: string;
  filters: {
    mediaTypeFilterOption?: Option;
    qualityFilterOption?: Option;
    priceFilterOption?: Option;
    releaseFilterOption?: Option;
    sortFilterOption?: Option;
    keywordFilters?: string[];
  };
};

export type VideoFilterFormValid = {
  name: string;
  filters: {
    mediaTypeFilterOption: Option;
    qualityFilterOption: Option;
    priceFilterOption: Option;
    releaseFilterOption: Option;
    sortFilterOption: Option;
    keywordFilters: string[];
  };
};

export type VideoFilterEntity = {
  id: string;
  name: string;
  filters: {
    mediaTypeFilterOption: Option;
    qualityFilterOption: Option;
    priceFilterOption: Option;
    releaseFilterOption: Option;
    sortFilterOption: Option;
    keywordFilters: string[];
  };
};

export type VideoFilter =
  | VideoFilterForm
  | VideoFilterFormValid
  | VideoFilterEntity;

export type UserVideoFilter = {
  isActive: boolean;
  avFilters: VideoFilterEntity[];
  amateurFilters: VideoFilterEntity[];
  animeFilters: VideoFilterEntity[];
};

// type OptionFilterData = {
//   label: string;
//   option: Option[];
// };
