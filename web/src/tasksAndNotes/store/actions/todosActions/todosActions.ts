import { Action } from 'redux';
import { Task, TaskSearchResults } from '../../../../../../types/tasksAndNotesInterfaces';
import { fetchData, updateData } from '../../../../shared/scripts/requests';

import {
  GET_TODOS,
  GET_TODOS_ERROR,
  GET_TODOS_SUCCESS,
  SAVE_TODO,
  SAVE_TODO_ERROR,
  TodosActionsTypes,
} from './todosActionsTypes';

export const saveTodo = (): TodosActionsTypes => ({
  type: SAVE_TODO,
});

export const saveTodoError = (payload: any): TodosActionsTypes => ({
  type: SAVE_TODO_ERROR,
  payload,
});

export const getTodos = (): TodosActionsTypes => ({
  type: GET_TODOS,
});

const getTodosSuccess = (payload: TaskSearchResults): TodosActionsTypes => ({
  type: GET_TODOS_SUCCESS,
  payload,
});

const getTodosError = (payload: any): TodosActionsTypes => ({
  type: GET_TODOS_ERROR,
  payload,
});

// thunk

export const handleGetTodos = () => (dispatch: (args: Action) => void) => {
  dispatch(getTodos());
  fetchData('todos')
    .then((payload: TaskSearchResults) => dispatch(getTodosSuccess(payload)))
    .catch(err => getTodosError(err));
};

export const handleSave = (payload: Task) => (dispatch: (arg0: any) => void) => {
  dispatch(saveTodo());
  const { id } = payload;
  if (id) {
    updateData(`todos/${id}`, payload, 'PUT')
      .then(() => dispatch(handleGetTodos()))
      .catch((err: any) => dispatch(saveTodoError(err)));
  } else {
    updateData('todos', payload, 'POST')
      .then(() => dispatch(handleGetTodos()))
      .catch((err: any) => dispatch(saveTodoError(err)));
  }
};
