import React from "react";
import { connect } from "react-redux";
import { Registration } from "../../../../../types/interfaces";
import { RegisterComponent } from "../component/RegisterComponent";
import { registerAction } from "../../store/actions/auth.actions";
import { AuthState } from "../../store/interfaces/auth.state";

interface RegisterProps {
  handleSubmit: (arg: Registration) => void;
  authState: any;
}

class RegisterContainer extends React.Component<RegisterProps> {
  handleSubmit = (data: Registration) => {
    const { login, password, email } = data;
    this.props.handleSubmit({
      login,
      password,
      email,
    });
  };

  render() {
    return (
      <RegisterComponent
        handleSubmit={this.handleSubmit}
        formState={this.props.authState}
      ></RegisterComponent>
    );
  }
}

const mapStateToProps = (state: { auth: AuthState }) => {
  const authState = state.auth;
  return { authState };
};

const mapDispatchToProps = {
  handleSubmit: registerAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
