import React from "react";
import { connect } from "react-redux";
import { Registration } from "../../../../../types/interfaces";
import { RegisterComponent } from "../component/RegisterComponent";
import { saveRegisterDataAndHandleError } from "../../store/actions/auth.actions";
import { AuthState } from "../../store/interfaces/auth.state";

interface RegisterProps {
  handleSubmit: (arg: Registration) => void;
  authState: any;
}

class RegisterContainer extends React.Component<RegisterProps> {
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
  handleSubmit: saveRegisterDataAndHandleError,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
