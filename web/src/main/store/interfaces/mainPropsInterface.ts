import { AuthState } from '../../../auth/store/interfaces/authState';
import { ModalType } from '../../../shared/store/enums/modalEnum';

export interface MainProps {
  resetForm: () => void;
  setUserIsLoggedIn: () => void;
  setUserIsLoggedOut: () => void;
  auth: AuthState;
}

export interface MainState {
  openedModal: ModalType;
}
