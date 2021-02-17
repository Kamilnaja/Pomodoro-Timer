import React from 'react';
import HeaderContainer from '../../header/container/HeaderContainer';
import { MainComponentProps } from './MainComponentProps';
import './mainComponent.scss';
import { Modal } from '../../shared/modal/Modal';

export const MainComponent = (props: MainComponentProps) => {
  return (
    <div className="app">
      <HeaderContainer handleOpenModal={props.handleOpenModal} isLoggedIn={props.isLoggedIn} />
      <Modal modalType={props.openedModal} closeModal={props.handleCloseModal} />
    </div>
  );
};