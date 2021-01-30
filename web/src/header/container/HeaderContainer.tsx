import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'shared/store/enums/modal.enum';
import { HeaderComponent } from '../component/HeaderComponent';

export interface HeaderProps {
  handleOpenModal: (arg: Modal) => void;
  handleLogout: () => void;
  isLoggedIn: boolean;
}

class HeaderContainer extends React.Component<HeaderProps> {
  render() {
    return (
      <HeaderComponent
        handleLogout={this.props.handleLogout}
        handleOpenModal={this.props.handleOpenModal}
        isLoggedIn={this.props.isLoggedIn}
      />
    );
  }
}

export default connect(null, null)(HeaderContainer);
