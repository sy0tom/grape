export type Schema =
  | "local:UserSettings"
  | "local:LoadingWaitTimeSettings"
  | "local:FilterSettings";

export function createLocalStorageClient<T>(schema: Schema) {
  return {
    get: async (): Promise<T | null> => {
      return storage.getItem(schema);
    },
    save: async (t: T): Promise<void> => {
      return storage.setItem(schema, t);
    },
  };
}
