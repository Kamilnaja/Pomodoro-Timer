import React from 'react';
import ReactModal from 'react-modal';
import LoginContainer from '../../auth/login/container/LoginContainer';
import LogoutContainer from '../../auth/logout/container/LogoutContainer';
import RegisterContainer from '../../auth/register/container/RegisterContainer';
import { ModalType as ModalEnum, ModalType } from '../store/enums/modalEnum';
import './modal.scss';
import { CreatedModal } from './ModalInterface';
import { ModalProps } from './ModalProps';

export const Modal = (props: ModalProps) => {
  const createModalBodyFactory = (modalType: ModalType): CreatedModal => {
    switch (modalType) {
      case ModalEnum.LOGIN:
        return { component: <LoginContainer />, title: 'Login' };
      case ModalEnum.REGISTER:
        return { component: <RegisterContainer />, title: 'Register' };
      case ModalEnum.LOGOUT:
        return { component: <LogoutContainer closeModal={props.closeModal} />, title: 'Logout' };
    }
  };

  const modal: CreatedModal = createModalBodyFactory(props.modalType);
  return (
    <>
      {props.modalType !== ModalEnum.NULL && (
        <ReactModal
          isOpen={true}
          ariaHideApp={false}
          shouldFocusAfterRender={true}
          shouldCloseOnOverlayClick={true}
          onRequestClose={props.closeModal}
          className="modal__content"
          overlayClassName="modal"
        >
          <div className="modal__wrapper">
            <header className="modal__header">
              <h2 className="modal__title">{modal.title}</h2>
              <button className="modal__button--close" onClick={props.closeModal}>
                ✕
              </button>
            </header>
            {modal.component}
          </div>
        </ReactModal>
      )}
    </>
  );
};