import { SettingsState } from '../../settings/store/interfaces/settingsInterfaces';

export interface CookiesInfoComponentProps {
  settingsState: SettingsState;
  handleSaveCookieConsent: () => void;
}
