import React from 'react';
import { connect } from 'react-redux';
import { setUserIsLoggedOut } from '../../store/actions/authActions';
import { AuthState } from '../../store/interfaces/authState';
import { LogoutComponent } from '../component/LogoutComponent';
import { LogoutContainerProps } from './LogoutContainerProps';

class LogoutContainer extends React.Component<LogoutContainerProps> {
  logout = () => {
    this.props.handleLogout();
    this.props.closeModal();
  };

  cancel = () => {
    this.props.closeModal();
  };

  render() {
    return <LogoutComponent handleLogout={this.logout} handleCancel={this.cancel}></LogoutComponent>;
  }
}

const mapStateToProps = (state: { auth: AuthState }) => {
  const authState = state.auth;
  return { auth: authState };
};

const mapDispatchToProps = {
  handleLogout: setUserIsLoggedOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer);
