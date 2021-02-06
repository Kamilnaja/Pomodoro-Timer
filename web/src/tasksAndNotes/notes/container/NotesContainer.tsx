import React from 'react';
import { connect } from 'react-redux';
import { TasksAndNotesState } from '../../store/models/TasksAndNotesInterfaces';
import { NotesComponent } from '../component/NotesComponent';

class NotesContainer extends React.Component {
  render() {
    return <NotesComponent />;
  }
}

const mapStateToProps = (state: TasksAndNotesState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);
