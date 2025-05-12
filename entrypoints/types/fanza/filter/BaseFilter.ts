export interface BaseFilter<T extends BaseFilterParams> {
  id: string;
  name: string;
  params: T;
}

export interface BaseFilterParams {
  keyword?: string;
}
