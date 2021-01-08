import React from "react";
import { connect } from "react-redux";
import { Registration } from "../../../../../types/interfaces";
import { RegisterComponent } from "../component/RegisterComponent";
import { sendRegisterForm } from "../../store/actions/auth.actions";
import { AuthState } from "../../store/interfaces/auth.state";

interface RegisterProps {
  handleSubmit: (arg: Registration) => void;
  handleClose: () => void;
  authState: AuthState;
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

  componentDidUpdate = (prevProps: RegisterProps) => {
    if (
      this.props.authState.isSuccess !== prevProps.authState.isSuccess &&
      this.props.authState.isSuccess
    ) {
      this.props.handleClose();
    }
  };

  render() {
    return (
      <RegisterComponent
        handleSubmit={this.handleSubmit}
        formState={this.props.authState}
        handleClose={this.props.handleClose}
      ></RegisterComponent>
    );
  }
}

const mapStateToProps = (state: { auth: AuthState }) => {
  const authState = state.auth;
  return { authState };
};

const mapDispatchToProps = {
  handleSubmit: sendRegisterForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
