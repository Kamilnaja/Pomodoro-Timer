import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleGetTodos } from '../../store/actions/todosActions';
import { TasksAndNotesState } from '../../store/models/TasksAndNotesInterfaces';
import { TodosComponent } from '../component/TodosComponent';
import { TodosContainerProps } from './todosContainerInterface';

class TodosContainer extends Component<TodosContainerProps> {
  componentDidMount() {
    this.props.handleGetTodos();
  }

  render() {
    return <TodosComponent />;
  }
}

const mapDispatchToProps = {
  handleGetTodos,
};

const mapStateToProps = (state: { tasksAndNotes: TasksAndNotesState }) => {
  {
    const todos = state.tasksAndNotes.todos;
    return { todos };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
