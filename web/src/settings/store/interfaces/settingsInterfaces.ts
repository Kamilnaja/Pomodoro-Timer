import { Settings } from '../../../../../types/settingsInterface';

export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface SettingsState {
  isLoading: boolean;
  error: any;
  settings: Settings;
  isCookieAcceptInfoVisible: boolean;
}
