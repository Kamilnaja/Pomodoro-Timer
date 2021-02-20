import React from 'react';
import { connect } from 'react-redux';
import { handleShowAddNewTask } from '../../store/actions/tasksActions/taskActions';
import { TasksAndNotesState } from '../../store/models/TasksAndNotesInterfaces';
import { SidebarComponent } from '../component/SidebarComponent';
import { SidebarContainerProps } from './sidebarContainerInterface';

class SidebarContainer extends React.Component<SidebarContainerProps> {
  handleOpenNewTask = () => {
    this.props.handleOpenNewTask();
  };

  render() {
    return <SidebarComponent handleOpenNewTask={this.handleOpenNewTask} />;
  }
}

const mapStateToProps = (state: TasksAndNotesState) => {
  const isAddingTaskActive = state.isAddingTaskActive;
  return { isAddingTaskActive };
};

const mapDispatchToProps = {
  handleOpenNewTask: handleShowAddNewTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
