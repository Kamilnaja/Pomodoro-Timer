import React, { ChangeEvent } from "react";
import { LoginComponent, LoginProps } from "../component/loginComponent";
// todo - handle error and loading using store!!!

export type formField = "email" | "name" | "password";

export interface LoginState {
  [key: string]: string;
}
export class LoginContainer extends React.Component<{}, LoginState> {
  handleSubmit = () => {
    // fetch()
    console.log("submitting!");
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  constructor(props: LoginProps) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: "",
    };
  }
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
