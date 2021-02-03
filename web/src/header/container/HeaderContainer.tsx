import React from 'react';
import { connect } from 'react-redux';
import { HeaderComponent, HeaderProps } from '../component/HeaderComponent';

class HeaderContainer extends React.Component<HeaderProps> {
  render() {
    return <HeaderComponent handleOpenModal={this.props.handleOpenModal} isLoggedIn={this.props.isLoggedIn} />;
  }
}

export default connect(null, null)(HeaderContainer);
