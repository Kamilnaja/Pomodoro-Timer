import { ModalType } from './modalEnum';

export interface ModalProps {
  modalType: ModalType;
  closeModal: CloseModal;
}

export type CloseModal = () => void;
export type OpenModal = (arg: ModalType) => void;
