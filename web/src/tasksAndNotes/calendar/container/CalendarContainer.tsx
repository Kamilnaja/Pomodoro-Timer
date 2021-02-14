import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TasksAndNotesState } from '../../store/models/TasksAndNotesInterfaces';
import { CalendarContainerProps } from './CalendarContainerProps';

class CalendarContainer extends Component<CalendarContainerProps> {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state: TasksAndNotesState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
