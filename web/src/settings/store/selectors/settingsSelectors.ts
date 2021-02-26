import { cookieConsentAcceptationKey } from '../../../shared/settings/initialConfig';
import { SettingsState } from '../interfaces/settingsInterfaces';

export const isCookieConsentVisible = (state: SettingsState): boolean => {
  return isCookieConsentAcceptationSavedInStorage()
    ? false
    : state.isCookieAcceptInfoVisible && !state.settings.isCookieConsentAccepted;
};

export const isCookieConsentAcceptationSavedInStorage = () =>
  JSON.parse(localStorage.getItem(cookieConsentAcceptationKey));
