import React from 'react';
import HeaderContainer from '../../header/container/HeaderContainer';
import { MainComponentProps } from './MainComponentProps';
import './mainComponent.scss';
import { Modal } from '../../shared/modal/Modal';
import { CookieInfo } from '../../cookieInfo/CookieInfo';

export const MainComponent = (props: MainComponentProps) => {
  return (
    <div className="app">
      <CookieInfo handleSaveCookieConsent={props.handleSaveCookieConsent}></CookieInfo>
      <HeaderContainer handleOpenModal={props.handleOpenModal} isLoggedIn={props.isLoggedIn} />
      <Modal modalType={props.openedModal} closeModal={props.handleCloseModal} />
    </div>
  );
};
