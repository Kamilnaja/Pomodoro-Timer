import { ModalType } from '../../shared/modal/modalEnum';
import { CloseModal, OpenModal } from '../../shared/modal/ModalProps';

export interface MainComponentProps {
  handleOpenModal: OpenModal;
  handleCloseModal: CloseModal;
  openedModal: ModalType;
  isLoggedIn: boolean;
  isCookieInfoVisible: boolean;
}
