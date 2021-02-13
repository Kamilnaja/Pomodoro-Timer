import { AuthState } from '../../store/interfaces/authState';

export interface LogoutContainerProps {
  handleLogout: () => void;
  closeModal: () => void;
  auth: AuthState;
}
