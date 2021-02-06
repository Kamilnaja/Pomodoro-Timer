import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleGetTodos } from '../../store/actions/todosActions';
import { TasksAndNotesState } from '../../store/models/TasksAndNotesInterfaces';
import { TodosComponent } from '../component/TodosComponent';
import { TodosContainerProps } from './todosContainerInterface';
import { Error } from 'shared/components/error/Error';
import { Loader } from 'shared/components/loader/Loader';

class TodosContainer extends Component<TodosContainerProps> {
  componentDidMount() {
    this.props.handleGetTodos();
  }

  render() {
    if (this.props.todosState.error) {
      return <Error />;
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
