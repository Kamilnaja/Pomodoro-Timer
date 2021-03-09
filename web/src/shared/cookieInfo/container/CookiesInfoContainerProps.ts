import { Settings } from '../../../../../types/settingsInterfaces';
import { AuthState } from '../../../auth/store/interfaces/authState';
import { SettingsState } from '../../../settings/store/interfaces/settingsInterfaces';

export interface CookiesInfoContainerProps {
  settingsState: SettingsState;
  authState: AuthState;
  hideCookieInfo: () => void;
  handleSaveSettings: (settings: Settings) => void;
  handleGetSettings: () => void;
}
