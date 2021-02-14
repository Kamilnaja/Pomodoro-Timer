import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CurrentFocusComponent } from '../component/CurrentFocusComponent';
import { CurrentFocusContainerProps } from './CurrentFocusContainerProps';

export class CurrentFocusContainer extends Component<CurrentFocusContainerProps> {
  render() {
    return <CurrentFocusComponent />;
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentFocusContainer);
