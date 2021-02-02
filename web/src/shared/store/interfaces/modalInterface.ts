import { Modal } from '../enums/modalEnum';

export interface ModalProps {
  modalType: Modal;
  closeModal: closeModal;
}

export type closeModal = () => void;

export type openModal = (arg: Modal) => void;
