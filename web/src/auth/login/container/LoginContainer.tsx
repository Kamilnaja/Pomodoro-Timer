import React from 'react';
import { connect } from 'react-redux';
import { Login } from '../../../../../types/authInterfaces';
import { Loader } from '../../../shared/loader/Loader';
import { sendLoginForm } from '../../store/actions/authActions';
import { AuthState } from '../../store/interfaces/authState';
import { LoginComponent } from '../component/LoginComponent';
import { LoginContainerProps } from './LoginContainerProps';

class LoginContainer extends React.Component<LoginContainerProps> {
  handleSubmit = (data: Login) => {
    const { login, password } = data;
    this.props.handleSubmit({
      login,
      password,
    });
  };

  render() {
    return this.props.auth.isLoading ? (
      <Loader />
    ) : (
      <LoginComponent handleSubmit={this.handleSubmit} auth={this.props.auth} />
    );
  }
}

const mapStateToProps = (state: { auth: AuthState }) => {
  const formState = state.auth;
  return { auth: formState };
};

const mapDispatchToProps = {
  handleSubmit: sendLoginForm,
};

const ConnectedLoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

export { ConnectedLoginContainer };
