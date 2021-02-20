import { AuthState } from '../../auth/store/interfaces/authState';
import { SettingsState } from '../../settings/store/interfaces/settingsInterfaces';

export interface MainContainerProps {
  resetForm: () => void;
  setUserIsLoggedIn: () => void;
  setUserIsLoggedOut: () => void;
  authState: AuthState;
  settingsState: SettingsState;
}
