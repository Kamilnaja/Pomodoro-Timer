import { SortDirection } from '../web/src/settings/store/interfaces/settingsInterfaces';

export interface Settings {
  isCookieConsentAccepted: boolean;
  isSoundEnabled: boolean;
  sortDirection: SortDirection;
}
