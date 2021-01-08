import React, { MouseEventHandler } from "react";
import ReactModal from "react-modal";
import LoginContainer from "../../../auth/login/container/LoginContainer";
import RegisterContainer from "../../../auth/register/container/RegisterContainer";
import Settings from "../../../settings/Settings";
import StatisticsContainer from "../../../statistics/container/StatisticsContainer";
import { Modal as ModalEnum } from "../../store/enums/modal.enum";
import { customStyles } from "./styles";
import "./modal.scss";

export interface ModalProps {
  modalType: ModalEnum;
  handleCloseModal: MouseEventHandler<HTMLButtonElement>;
}

const getModal = (modalType: ModalEnum) => {
  switch (modalType) {
    case ModalEnum.LOGIN:
      return <LoginContainer />;
    case ModalEnum.REGISTER:
      return <RegisterContainer />;
    case ModalEnum.STATS:
      return <StatisticsContainer />;
    case ModalEnum.SETTINGS:
      return <Settings />;
  }
};

export const Modal = (props: ModalProps) => {
  return (
    <ReactModal
      isOpen={props.modalType !== ModalEnum.NULL}
      ariaHideApp={false}
      shouldFocusAfterRender={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={props.handleCloseModal}
      style={customStyles}
    >
      <div className="modal">
        <header className="modal__header">
          <button
            className="modal__button--close"
            onClick={props.handleCloseModal}
          >
            ✕
          </button>
        </header>
        {getModal(props.modalType)}
      </div>
    </ReactModal>
  );
};
