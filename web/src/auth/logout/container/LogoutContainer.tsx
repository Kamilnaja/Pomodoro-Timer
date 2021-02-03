import React from 'react';
import { connect } from 'react-redux';
import { setUserIsLoggedOut } from '../../store/actions/authActions';
import { AuthState } from '../../store/interfaces/authState';
import { LogoutComponent } from '../component/LogoutComponent';

export interface LogoutContainerProps {
  handleLogout: () => void;
  auth: AuthState;
}

class LogoutContainer extends React.Component<LogoutContainerProps> {
  render() {
    return <LogoutComponent handleLogout={this.props.handleLogout}></LogoutComponent>;
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
