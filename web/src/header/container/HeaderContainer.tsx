import React from 'react';
import { connect } from 'react-redux';
import { HeaderComponent } from '../component/HeaderComponent';
import { HeaderContainerProps } from './HeaderContainerProps';

class HeaderContainer extends React.Component<HeaderContainerProps> {
  render() {
    return <HeaderComponent handleOpenModal={this.props.handleOpenModal} isLoggedIn={this.props.isLoggedIn} />;
  }
}

export default connect(null, null)(HeaderContainer);
