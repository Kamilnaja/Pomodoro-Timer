import { resetForm, setUserIsLoggedIn, setUserIsLoggedOut } from 'auth/store/actions/authActions';
import React from 'react';
import { connect } from 'react-redux';
import { ModalType as ModalEnum } from 'shared/modal/modalEnum';
import { AuthState } from '../../auth/store/interfaces/authState';
import { CloseModal, OpenModal } from '../../shared/modal/ModalProps';
import { MainComponent } from '../component/MainComponent';
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

  handleOpenModal: OpenModal = (modal: ModalEnum) =>
    this.setState({
      openedModal: modal,
    });

  handleCloseModal: CloseModal = () => {
    this.setState({
      openedModal: ModalEnum.NULL,
    });
    this.props.resetForm();
  };

  render = () => (
    <MainComponent
      handleOpenModal={this.handleOpenModal}
      handleCloseModal={() => this.handleCloseModal()}
      openedModal={this.state.openedModal}
      isLoggedIn={this.props.auth.isLoggedIn}
    />
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
