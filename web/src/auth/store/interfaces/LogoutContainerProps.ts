import { AuthState } from './authState';

export interface LogoutContainerProps {
  handleLogout: () => void;
  closeModal: () => void;
  auth: AuthState;
}
