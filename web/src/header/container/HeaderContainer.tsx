import {Modal} from "../../shared/store/enums/modal.enum";
import "./headerContainer.scss";
import React from "react";
import {HeaderComponent} from "../component/HeaderComponent";
import {AuthState} from "../../auth/store/interfaces/auth.state";
import {connect} from "react-redux";

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
