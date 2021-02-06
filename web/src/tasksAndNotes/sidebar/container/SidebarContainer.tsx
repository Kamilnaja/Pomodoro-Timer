import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TasksAndNotesState} from '../../store/models/TasksAndNotesInterfaces';
import {SidebarComponent} from '../component/SidebarComponent';

export class SidebarContainer extends Component {
  render() {
    return <SidebarComponent />;
  }
}

const mapStateToProps = (state: TasksAndNotesState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
