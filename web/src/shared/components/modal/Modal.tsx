import React from "react";
import ReactModal from "react-modal";
import { Login } from "../../../login/loginForm/LoginContainer";
import Settings from "../../../settings/Settings";
import StatisticsContainer from "../../../statistics/container/StatisticsContainer";
import { Modal as ModalEnum } from "../../store/enums/modal.enum";
import "./modal.scss";

export interface ModalProps {
  modalType: ModalEnum;
  handleCloseModal: React.MouseEventHandler<HTMLButtonElement>;
}

export const Modal = (props: ModalProps) => (
  <ReactModal
    isOpen={props.modalType !== ModalEnum.NULL}
    ariaHideApp={false}
    shouldFocusAfterRender={true}
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
      {props.modalType === ModalEnum.LOGIN && <Login></Login>}
      {props.modalType === ModalEnum.STATS && (
        <StatisticsContainer></StatisticsContainer>
      )}
      {props.modalType === ModalEnum.SETTINGS && <Settings></Settings>}
    </div>
  </ReactModal>
);
