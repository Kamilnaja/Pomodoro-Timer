import React from "react";
import { connect } from "react-redux";
import { Login } from "../../../../../types/interfaces";
import { sendLoginForm } from "../../store/actions/auth.actions";
import { AuthState } from "../../store/interfaces/auth.state";
import { LoginComponent } from "../component/LoginComponent";

interface LoginProps {
  handleSubmit: (arg: Login) => void;
  authState: AuthState;
}

class LoginContainer extends React.Component<LoginProps> {
  handleSubmit = (data: Login) => {
    const { login, password } = data;
    this.props.handleSubmit({
      login,
      password,
    });
  };

  handleClose = () => {};

  componentDidUpdate = (prevProps: LoginProps) => {
    if (
      this.props.authState.isSuccess !== prevProps.authState.isSuccess &&
      this.props.authState.isSuccess
    ) {
      console.log(this.props.authState);
    }
  };

  render() {
    return (
      <LoginComponent
        handleSubmit={this.handleSubmit}
        formState={this.props.authState}
        handleClose={this.handleClose}
      ></LoginComponent>
    );
  }
}

const mapStateToProps = (state: { auth: AuthState }) => {
  const authState = state.auth;
  return { authState };
};

const mapDispatchToProps = {
  handleSubmit: sendLoginForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
