import { isCookieConsentAcceptedKey } from '../../../shared/settings/initialConfig';
import { SettingsState } from '../interfaces/settingsInterfaces';

export const isCookieConsentVisible = (state: SettingsState): boolean => {
  if (JSON.parse(localStorage.getItem(isCookieConsentAcceptedKey))) {
    return false;
  }
  return state.isCookieAcceptInfoVisible && !state.settings.isCookieConsentAccepted;
};
