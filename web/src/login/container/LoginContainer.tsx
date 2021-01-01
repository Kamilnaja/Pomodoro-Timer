import React from "react";
import { LoginComponent } from "../component/loginComponent";
// todo - handle error and loading using store!!!
export interface LoginState {
  name: string;
  password: string;
  email: string;
}
export class LoginContainer extends React.Component<{}, LoginState> {
  handleSubmit = () => {
    // fetch()
  };

  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: "",
    };
  }
  render() {
    return <LoginComponent handleSubmit={this.handleSubmit}></LoginComponent>;
  }
}
