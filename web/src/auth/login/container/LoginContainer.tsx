import React from "react";
import { connect } from "react-redux";
import { Registration } from "../../../../../types/interfaces";
import { saveRegisterDataAndHandleError } from "../../store/actions/auth.actions";
import { AuthState } from "../../store/interfaces/auth.state";
import { LoginComponent } from "../component/LoginComponent";

interface LoginProps {
  handleSubmit: (arg: Registration) => void;
  authState: any;
}

class LoginContainer extends React.Component<LoginProps> {
  handleSubmit = (data: Registration) => {
    const { name, password, email } = data;
    this.props.handleSubmit({
      name,
      password,
      email,
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
  handleSubmit: saveRegisterDataAndHandleError,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
