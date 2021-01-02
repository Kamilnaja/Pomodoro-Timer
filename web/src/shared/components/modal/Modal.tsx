import React, { MouseEventHandler } from "react";
import ReactModal from "react-modal";
import LoginContainer from "../../../login/container/LoginContainer";
import Settings from "../../../settings/Settings";
import StatisticsContainer from "../../../statistics/container/StatisticsContainer";
import { Modal as ModalEnum } from "../../store/enums/modal.enum";
import "./modal.scss";

export interface ModalProps {
  modalType: ModalEnum;
  handleCloseModal: MouseEventHandler<HTMLButtonElement>;
}

export const Modal = (props: ModalProps) => (
  <ReactModal
    isOpen={props.modalType !== ModalEnum.NULL}
    ariaHideApp={false}
    shouldFocusAfterRender={true}
    shouldCloseOnOverlayClick={true}
    onRequestClose={props.handleCloseModal}
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
      {props.modalType === ModalEnum.LOGIN && <LoginContainer></LoginContainer>}
      {props.modalType === ModalEnum.STATS && (
        <StatisticsContainer></StatisticsContainer>
      )}
      {props.modalType === ModalEnum.SETTINGS && <Settings></Settings>}
    </div>
  </ReactModal>
);
