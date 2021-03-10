import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TagComponent } from '../component/TagComponent';
import { TagContainerProps } from './TagContainer.props';

class TagContainer extends Component<TagContainerProps> {
  render() {
    return <TagComponent />;
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TagContainer);
