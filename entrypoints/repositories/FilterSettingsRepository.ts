import { FilterSettings } from "#/types";

export interface FilterSettingsRepository {
  get: () => Promise<FilterSettings | null>;
  save: (settings: FilterSettings) => Promise<void>;
}
