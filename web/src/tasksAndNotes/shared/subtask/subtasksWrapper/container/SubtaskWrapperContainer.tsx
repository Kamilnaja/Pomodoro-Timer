import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddSubtask } from '../../../../store/actions/taskActions';
import { SubtaskWrapperComponent } from '../components/subtaskWrapperComponent/SubtaskWrapperComponent';
import { SubtaskWrapperContainerProps } from './subtaskWrapperContainerProps';

class SubtaskContainer extends Component<SubtaskWrapperContainerProps> {
  render() {
    return <SubtaskWrapperComponent addSubtask={this.props.handleAddSubtask} subtasks={this.props.subtasks} />;
  }
}

const mapDispatchToProps = {
  handleAddSubtask,
};

export default connect(null, mapDispatchToProps)(SubtaskContainer);
