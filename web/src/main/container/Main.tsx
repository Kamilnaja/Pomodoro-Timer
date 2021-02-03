import { resetForm, setUserIsLoggedIn, setUserIsLoggedOut } from 'auth/store/actions/authActions';
import HeaderContainer from 'header/container/HeaderContainer';
import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'shared/components/modal/Modal';
import { Modal as ModalEnum } from 'shared/store/enums/modalEnum';
import StatsContainer from 'stats/containers/StatsContainer';
import Timer from 'timer/containers/Timer';
import { AuthState } from '../../auth/store/interfaces/authState';
import { closeModal, openModal } from '../../shared/store/interfaces/modalInterface';
import { MainProps, MainState } from '../store/interfaces/mainPropsInterface';
import './main.scss';

class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
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

  handleLogout = () => {
    this.props.setUserIsLoggedOut();
  };

  render = () => (
    <div className="app">
      <HeaderContainer
        handleLogout={this.handleLogout}
        handleOpenModal={this.handleOpenModal}
        isLoggedIn={this.props.auth.isLoggedIn}
      />
      <Timer />
      {this.props.auth.isLoggedIn && <StatsContainer />}
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
