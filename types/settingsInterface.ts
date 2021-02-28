import { DisplayDirection } from '../web/src/settings/store/interfaces/settingsInterfaces';

export interface Settings {
  isCookieConsentAccepted: boolean;
  isSoundEnabled: boolean;
  displayDirection: DisplayDirection;
}
