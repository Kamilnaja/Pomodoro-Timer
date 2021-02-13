import { resetForm, setUserIsLoggedIn, setUserIsLoggedOut } from 'auth/store/actions/authActions';
import HeaderContainer from 'header/container/HeaderContainer';
import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'shared/modal/Modal';
import { ModalType as ModalEnum } from 'shared/store/enums/modalEnum';
import { AuthState } from '../../auth/store/interfaces/authState';
import { closeModal, openModal } from '../../shared/modal/ModalProps';
import './main.scss';
import { MainContainerProps } from './MainContainerProps';
import { MainContainerState } from './MainContainerState';

class MainContainer extends React.Component<MainContainerProps, MainContainerState> {
  constructor(props: MainContainerProps) {
    super(props);
    this.state = {
      openedModal: ModalEnum.NULL,
    };
    this.props.setUserIsLoggedIn();
  }

  handleOpenModal: openModal = (modal: ModalEnum) =>
    this.setState({
      openedModal: modal,
    });

  handleCloseModal: closeModal = () => {
    this.setState({
      openedModal: ModalEnum.NULL,
    });
    this.props.resetForm();
  };

  render = () => (
    <div className="app">
      <HeaderContainer handleOpenModal={this.handleOpenModal} isLoggedIn={this.props.auth.isLoggedIn} />
      <Modal modalType={this.state.openedModal} closeModal={this.handleCloseModal} />
    </div>
  );
}

const mapDispatchToProps = {
  resetForm,
  setUserIsLoggedIn,
  setUserIsLoggedOut,
};

const mapStateToProps = (state: { auth: AuthState }) => {
  const authState = state.auth;
  return { auth: authState };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
