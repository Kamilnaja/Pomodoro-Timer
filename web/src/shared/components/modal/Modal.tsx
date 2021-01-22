import React from "react";
import ReactModal from "react-modal";
import LoginContainer from "../../../auth/login/container/LoginContainer";
import RegisterContainer from "../../../auth/register/container/RegisterContainer";
import Settings from "../../../settings/Settings";
import StatisticsContainer from "../../../statistics/container/StatisticsContainer";
import { Modal as ModalEnum } from "../../store/enums/modal.enum";
import "./modal.scss";

export interface ModalProps {
  modalType: ModalEnum;
  closeModal: () => void;
}

const createModalFactory = (props: ModalProps) => {
  switch (props.modalType) {
    case ModalEnum.LOGIN:
      return <LoginContainer handleClose={props.closeModal} />;
    case ModalEnum.REGISTER:
      return <RegisterContainer handleClose={props.closeModal} />;
    case ModalEnum.STATS:
      return <StatisticsContainer handleClose={props.closeModal} />;
    case ModalEnum.SETTINGS:
      return <Settings handleClose={props.closeModal} />;
  }
};

export const Modal = (props: ModalProps) => {
  return (
    <ReactModal
      isOpen={props.modalType !== ModalEnum.NULL}
      ariaHideApp={false}
      shouldFocusAfterRender={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={props.closeModal}
      className="modal__content"
      overlayClassName="modal"
    >
      <div className="modal__wrapper">
        <header className="modal__header">
          <button className="modal__button--close" onClick={props.closeModal}>
            ✕
          </button>
        </header>
        {createModalFactory(props)}
      </div>
    </ReactModal>
  );
};
