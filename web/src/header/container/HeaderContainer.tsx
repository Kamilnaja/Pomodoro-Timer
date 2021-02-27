import React from 'react';
import { HeaderComponent } from '../component/HeaderComponent';
import { HeaderContainerProps } from './HeaderContainerProps';

export default class HeaderContainer extends React.Component<HeaderContainerProps> {
  render() {
    return <HeaderComponent handleOpenModal={this.props.handleOpenModal} isLoggedIn={this.props.isLoggedIn} />;
  }
}
