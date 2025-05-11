import AmateurFilterSettingsForm from "./form/AmateurFilterSettingsForm";
import AnimeFilterSettingsForm from "./form/AnimeFilterSettingsForm";
import AvFilterSettingsForm from "./form/AvFilterSettingsForm";
export { default as FilterSettingsBoard } from "./board/FilterSettingsBoard";
export type FilterFormType =
  | typeof AvFilterSettingsForm
  | typeof AmateurFilterSettingsForm
  | typeof AnimeFilterSettingsForm;
