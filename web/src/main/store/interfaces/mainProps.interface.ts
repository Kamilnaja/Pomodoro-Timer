import { AuthState } from '../../../auth/store/interfaces/auth.state';
import { Modal } from '../../../shared/store/enums/modalEnum';

export interface MainProps {
  resetForm: () => void;
  setUserIsLoggedIn: () => void;
  setUserIsLoggedOut: () => void;
  auth: AuthState;
}

export interface MainState {
  openedModal: Modal;
}
