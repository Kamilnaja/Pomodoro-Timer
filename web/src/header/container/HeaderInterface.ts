import { OpenModal } from '../../shared/modal/ModalProps';

export interface HeaderProps {
  handleOpenModal: OpenModal;
  handleLogout: logout;
  isLoggedIn: boolean;
}

export type logout = () => void;
