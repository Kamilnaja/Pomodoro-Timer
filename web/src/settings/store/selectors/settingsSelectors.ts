import { SettingsState } from '../interfaces/settingsInterfaces';

export const isCookieConsentVisible = (state: SettingsState): boolean => {
  return state.isCookieAcceptInfoVisible && !state.settings.isCookieConsentAccepted;
};
