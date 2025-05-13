import { LoadingWaitTimeSettings } from "#/types";

export interface LoadingWaitTimeSettingsRepository {
  get: () => Promise<LoadingWaitTimeSettings | null>;
  save: (settings: LoadingWaitTimeSettings) => Promise<void>;
}
