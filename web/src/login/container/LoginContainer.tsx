import React, { ChangeEvent, MouseEvent } from "react";
import { connect } from "react-redux";
import { Registration } from "../../../../types/interfaces";
import { LoginComponent } from "../component/loginComponent";
import { saveRegisterDataAndHandleError } from "../store/actions/auth.actions";

export interface LoginState {
  [key: string]: string;
}

export interface LoginProps {
  handleSubmit: (arg: Registration) => void;
}

class LoginContainer extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: "",
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event: MouseEvent) => {
    event.preventDefault();
    const { name, password, email } = this.state;
    this.props.handleSubmit({
      name,
      password,
      email,
    });
    // todo - only on success
    this.setState({
      name: "",
      password: "",
      email: "",
    });
  };

  render() {
    return (
      <LoginComponent
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        formData={this.state}
      ></LoginComponent>
    );
  }
}

const mapDispatchToProps = {
  handleSubmit: saveRegisterDataAndHandleError,
};

export default connect(null, mapDispatchToProps)(LoginContainer);
