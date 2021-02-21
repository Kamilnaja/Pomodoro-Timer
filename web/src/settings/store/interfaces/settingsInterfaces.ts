import { Settings } from '../../../../../types/settingsInterface';

export interface SettingsState {
  settings: Settings;
  isLoading: boolean;
  error: any;
  isCookieAcceptInfoVisible: boolean;
}
