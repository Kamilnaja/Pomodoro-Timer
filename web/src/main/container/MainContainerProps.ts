import { AuthState } from '../../auth/store/interfaces/authState';

export interface MainContainerProps {
  resetForm: () => void;
  setUserIsLoggedIn: () => void;
  setUserIsLoggedOut: () => void;
  authState: AuthState;
}
