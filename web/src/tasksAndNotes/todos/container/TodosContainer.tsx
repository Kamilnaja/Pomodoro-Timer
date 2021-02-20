import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ErrorComponent } from 'shared/error/errorComponent/ErrorComponent';
import { Loader } from 'shared/loader/Loader';
import { handleGetTodos } from '../../store/actions/todosActions/todosActions';
import { TasksAndNotesState } from '../../store/models/TasksAndNotesInterfaces';
import { TodosComponent } from '../component/TodosComponent';
import { TodosContainerProps } from './todosContainerInterface';

class TodosContainer extends Component<TodosContainerProps> {
  componentDidMount() {
    this.props.handleGetTodos();
  }

  render() {
    if (this.props.todosState.error) {
      return <ErrorComponent />;
    } else if (this.props.todosState.isLoading) {
      return <Loader />;
    } else {
      return (
        <TodosComponent
          todos={this.props.todosState.todos}
          isAddingTaskActive={this.props.todosState.isAddingTaskActive}
        />
      );
    }
  }
}

const mapDispatchToProps = {
  handleGetTodos,
};

const mapStateToProps = (state: { tasksAndNotes: TasksAndNotesState }) => {
  const todosState = state.tasksAndNotes;
  return { todosState };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
