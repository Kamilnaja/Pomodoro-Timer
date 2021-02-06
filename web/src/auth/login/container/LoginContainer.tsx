import React from 'react';
import { connect } from 'react-redux';
import { Login } from '../../../../../types/authInterfaces';
import { sendLoginForm } from '../../store/actions/authActions';
import { AuthState } from '../../store/interfaces/authState';
import { LoginComponent } from '../component/LoginComponent';

interface LoginContainerProps {
  handleSubmit: (arg: Login) => void;
  auth: AuthState;
}

class LoginContainer extends React.Component<LoginContainerProps> {
  handleSubmit = (data: Login) => {
    const { login, password } = data;
    this.props.handleSubmit({
      login,
      password,
    });
  };

  render() {
    return <LoginComponent handleSubmit={this.handleSubmit} auth={this.props.auth} />;
  }
}

const mapStateToProps = (state: { auth: AuthState }) => {
  const formState = state.auth;
  return { auth: formState };
};

const mapDispatchToProps = {
  handleSubmit: sendLoginForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
