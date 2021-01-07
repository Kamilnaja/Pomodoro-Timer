import React from "react";
import { connect } from "react-redux";
import { Login } from "../../../../../types/interfaces";
import { loginAction } from "../../store/actions/auth.actions";
import { AuthState } from "../../store/interfaces/auth.state";
import { LoginComponent } from "../component/LoginComponent";

interface LoginProps {
  handleSubmit: (arg: Login) => void;
  authState: any;
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
      <LoginComponent
        handleSubmit={this.handleSubmit}
        formState={this.props.authState}
      ></LoginComponent>
    );
  }
}

const mapStateToProps = (state: { auth: AuthState }) => {
  const authState = state.auth;
  return { authState };
};

const mapDispatchToProps = {
  handleSubmit: loginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
