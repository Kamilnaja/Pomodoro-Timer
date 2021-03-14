import React from 'react';
import ReactModal from 'react-modal';
import { ConnectedLoginContainer } from '../../auth/login/container/LoginContainer';
import { ConnectedLogoutContainer } from '../../auth/logout/container/LogoutContainer';
import { ConnectedRegisterContainer } from '../../auth/register/container/RegisterContainer';
import './modal.scss';
import { ModalType as ModalEnum, ModalType } from './modalEnum';
import { CreatedModal } from './ModalInterface';
import { ModalProps } from './ModalProps';

export const Modal = (props: ModalProps) => {
  const createModalBodyFactory = (modalType: ModalType): CreatedModal => {
    switch (modalType) {
      case ModalEnum.LOGIN:
        return { component: <ConnectedLoginContainer />, title: 'Login' };
      case ModalEnum.REGISTER:
        return { component: <ConnectedRegisterContainer />, title: 'Register' };
      case ModalEnum.LOGOUT:
        return { component: <ConnectedLogoutContainer closeModal={props.closeModal} />, title: 'Logout' };
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
