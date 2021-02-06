import React from 'react';
import { connect } from 'react-redux';
import { TasksAndNotesState } from '../../store/models/TasksAndNotesInterfaces';
import { TaskAndNotesComponent } from '../taskAndNotesComponent/TaskAndNotesComponent';

class TaskAndNotesContainer extends React.Component {
  render() {
    return <TaskAndNotesComponent />;
  }
}

const mapStateToProps = (state: TasksAndNotesState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TaskAndNotesContainer);
