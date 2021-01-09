import React from "react";
import { connect } from "react-redux";
import { Login } from "../../../../../types/interfaces";
import { handleCloseModal } from "../../../shared/scripts/utils";
import { sendLoginForm } from "../../store/actions/auth.actions";
import { AuthState } from "../../store/interfaces/auth.state";
import { LoginComponent } from "../component/LoginComponent";

interface LoginProps {
  authState: AuthState;
  handleSubmit: (arg: Login) => void;
  handleClose: () => void;
}

class LoginContainer extends React.Component<LoginProps> {
  handleSubmit = (data: Login) => {
    const { login, password } = data;
    this.props.handleSubmit({
      login,
      password,
    });
  };

  componentDidUpdate = (prevProps: LoginProps) => {
    handleCloseModal(prevProps.authState, this.props);
  };

  render() {
    return (
      <LoginComponent
        handleSubmit={this.handleSubmit}
        authState={this.props.authState}
        handleClose={this.props.handleClose}
      ></LoginComponent>
    );
  }
}

const mapStateToProps = (state: { auth: AuthState }) => {
  const formState = state.auth;
  return { authState: formState };
};

const mapDispatchToProps = {
  handleSubmit: sendLoginForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
