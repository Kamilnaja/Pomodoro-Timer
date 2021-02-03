import React from 'react';
import { connect } from 'react-redux';
import { Login } from '../../../../../types/interfaces';
import { sendLoginForm } from '../../store/actions/authActions';
import { AuthState } from '../../store/interfaces/authState';
import { LoginComponent } from '../component/LoginComponent';

interface LoginProps {
  handleSubmit: (arg: Login) => void;
  handleClose: () => void;
  auth: AuthState;
}

class LoginContainer extends React.Component<LoginProps> {
  handleSubmit = (data: Login) => {
    const { login, password } = data;
    this.props.handleSubmit({
      login,
      password,
    });
  };

  render() {
    return (
      <LoginComponent handleSubmit={this.handleSubmit} auth={this.props.auth} handleClose={this.props.handleClose} />
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
