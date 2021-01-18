import React from "react";
import { connect } from "react-redux";
import { Modal } from "shared/store/enums/modal.enum";
import { AuthState } from "../../auth/store/interfaces/auth.state";
import { HeaderComponent } from "../component/HeaderComponent";
import "./headerContainer.scss";

export interface HeaderProps {
  handleOpenModal: (arg: Modal) => void;
  auth?: AuthState;
}

class HeaderContainer extends React.Component<HeaderProps> {
  render() {
    return <HeaderComponent handleOpenModal={this.props.handleOpenModal} authState={this.props.auth!} />;
  }
}

const mapStateToProps = (state: { auth: AuthState }) => {
  const auth = state.auth;
  return { auth };
};

export default connect(mapStateToProps, null)(HeaderContainer);
