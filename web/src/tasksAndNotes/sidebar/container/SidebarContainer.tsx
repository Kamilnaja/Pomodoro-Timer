import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TasksAndNotesState } from '../../store/models/TasksAndNotesInterfaces';
import { SidebarComponent } from '../component/SidebarComponent';

export class SidebarContainer extends Component {
  handleOpenNewTask = () => {
    console.log('adding');
  };

  render() {
    return <SidebarComponent handleOpenNewTask={this.handleOpenNewTask} />;
  }
}

const mapStateToProps = (state: TasksAndNotesState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
