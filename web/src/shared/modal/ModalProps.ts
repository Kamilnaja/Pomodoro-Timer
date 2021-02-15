import { ModalType } from './modalEnum';

export interface ModalProps {
  modalType: ModalType;
  closeModal: closeModal;
}

export type closeModal = () => void;
export type openModal = (arg: ModalType) => void;
