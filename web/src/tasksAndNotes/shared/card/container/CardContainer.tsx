import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TasksAndNotesState } from '../../../store/models/TasksAndNotesInterfaces';
import { CardComponent } from '../component/CardComponent';
import { CardCointainerProps } from './cardContainerProps';
import { handleSave } from '../../../store/actions/todosActions';

class CardContainer extends Component<CardCointainerProps> {
  addSubtask = () => {
    console.log('adding subtask');
  };

  render() {
    return (
      <CardComponent
        addSubtask={this.addSubtask}
        task={this.props.task}
        handleSave={this.props.handleSave}
      ></CardComponent>
    );
  }
}

const mapDispatchToProps = {
  handleSave,
};

const mapStateToProps = (state: { tasksAndNotes: TasksAndNotesState }) => {
  const todosState = state.tasksAndNotes;
  return { todosState };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
