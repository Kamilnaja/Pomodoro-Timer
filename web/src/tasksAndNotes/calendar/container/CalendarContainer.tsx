import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TasksAndNotesState } from '../../store/models/TasksAndNotesInterfaces';

class CalendarContainer extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state: TasksAndNotesState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
