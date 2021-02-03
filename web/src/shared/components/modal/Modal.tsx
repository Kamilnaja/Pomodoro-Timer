import React from 'react';
import ReactModal from 'react-modal';
import LoginContainer from '../../../auth/login/container/LoginContainer';
import LogoutContainer from '../../../auth/logout/container/LogoutContainer';
import RegisterContainer from '../../../auth/register/container/RegisterContainer';
import Settings from '../../../settings/Settings';
import { Modal as ModalEnum } from '../../store/enums/modalEnum';
import { ModalProps } from '../../store/interfaces/modalInterface';
import './modal.scss';

const createModalFactory = (props: ModalProps) => {
  switch (props.modalType) {
    case ModalEnum.LOGIN:
      return <LoginContainer />;
    case ModalEnum.REGISTER:
      return <RegisterContainer />;
    case ModalEnum.SETTINGS:
      return <Settings />;
    case ModalEnum.LOGOUT:
      return <LogoutContainer />;
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
