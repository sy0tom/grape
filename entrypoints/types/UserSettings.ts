import { InjectWaitTime, VideoFilter } from "./fanza";

export interface UserSettings {
  filters?: VideoFilter[];
  injectWaitTime?: InjectWaitTime;
}
