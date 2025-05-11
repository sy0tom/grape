import { AnimeFilter } from "#/types";

export interface AnimeFilterSettingsRepository {
  getAll: () => Promise<AnimeFilter[] | null>;

  save: (data: AnimeFilter) => Promise<void>;

  delete: (id: string) => Promise<void>;
}
