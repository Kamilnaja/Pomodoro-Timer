import React from "react";
import {connect} from "react-redux";
import {Registration} from "../../../../../types/interfaces";
import {RegisterComponent} from "../component/RegisterComponent";
import {sendRegisterForm} from "../../store/actions/auth.actions";
import {AuthState} from "../../store/interfaces/auth.state";
import {handleCloseModal} from "../../../shared/scripts/utils";

export interface RegisterProps {
  handleSubmit: (arg: Registration) => void;
  handleClose: () => void;
  auth: AuthState;
}

class RegisterContainer extends React.Component<RegisterProps> {
  handleSubmit = (registrationData: Registration) => {
    const { login, password, email } = registrationData;
    this.props.handleSubmit({
      login,
      password,
      email,
    });
  };

  componentDidUpdate = (prevProps: RegisterProps) => {
    handleCloseModal(prevProps.auth, this.props);
  };

  render() {
    return <RegisterComponent handleSubmit={this.handleSubmit} formState={this.props.auth} handleClose={this.props.handleClose} />;
  }
}

const mapStateToProps = (state: { auth: AuthState }) => {
  const formState = state.auth;
  return { auth: formState };
};

const mapDispatchToProps = {
  handleSubmit: sendRegisterForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
