export interface VideoFilterSettingsService<T> {
  getAll: () => Promise<T[]>;
  save: (data: T) => Promise<void>;
  delete: (id: string) => Promise<void>;
}
