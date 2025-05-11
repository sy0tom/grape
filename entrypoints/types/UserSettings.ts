import { InjectWaitTime, VideoFilter } from "./fanza";

// todo: Add amateur and anime filters
export interface UserSettings {
  filters?: VideoFilter[];
  injectWaitTime?: InjectWaitTime;
}
