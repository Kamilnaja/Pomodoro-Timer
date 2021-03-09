import { Settings } from '../../../../../types/settingsInterfaces';

export enum DisplayDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface SettingsState {
  isLoading: boolean;
  error: any;
  settings: Settings;
  isCookieAcceptInfoVisible: boolean;
}
