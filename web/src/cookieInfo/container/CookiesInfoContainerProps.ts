import { Settings } from '../../../../types/settingsInterface';
import { SettingsState } from '../../settings/store/interfaces/settingsInterfaces';

export interface CookiesInfoContainerProps {
  settingsState: SettingsState;
  handleSaveCookieConsent: (settings: Settings) => void;
}
