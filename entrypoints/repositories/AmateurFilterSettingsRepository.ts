import { AmateurFilter } from "#/types";

export interface AmateurFilterSettingsRepository {
  getAll: () => Promise<AmateurFilter[] | null>;

  save: (data: AmateurFilter) => Promise<void>;

  delete: (id: string) => Promise<void>;
}
