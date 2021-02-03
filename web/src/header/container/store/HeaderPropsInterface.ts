import { openModal } from '../../../shared/store/interfaces/modalInterface';

export interface HeaderProps {
  handleOpenModal: openModal;
  handleLogout: logout;
  isLoggedIn: boolean;
}

export type logout = () => void;
