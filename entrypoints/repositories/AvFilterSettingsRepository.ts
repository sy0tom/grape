import { AvFilter } from "#/types";

export interface AvFilterSettingsRepository {
  getAll: () => Promise<AvFilter[] | null>;

  save: (data: AvFilter) => Promise<void>;

  delete: (id: string) => Promise<void>;
}
