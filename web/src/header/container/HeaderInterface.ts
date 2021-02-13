import { openModal } from '../../shared/modal/ModalProps';

export interface HeaderProps {
  handleOpenModal: openModal;
  handleLogout: logout;
  isLoggedIn: boolean;
}

export type logout = () => void;
