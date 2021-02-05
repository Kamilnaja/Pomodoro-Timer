import { Action } from 'redux';
import { Todo } from '../../../../../types/tasksAndNotesInterfaces';
import { ActionWithPayload } from '../../../shared/store/interfaces/actions/actionInterface';

export enum TodosActions {
  ADD_TODO = 'add todo',
  ADD_TODO_SUCCESS = 'add todo success',
  ADD_TODO_ERROR = 'add todo error',

  GET_TODO = 'get todos',
  GET_TODO_SUCCESS = 'get todos success',
  GET_TODO_ERROR = 'get todos error',
}

const addTodo = (): Action<TodosActions> => ({
  type: TodosActions.ADD_TODO,
});

const addTodoSuccess = (payload: Todo[]): ActionWithPayload<TodosActions, Todo[]> => ({
  type: TodosActions.ADD_TODO_SUCCESS,
  payload,
});

const addTodoError = (payload: any): ActionWithPayload<TodosActions, any> => ({
  type: TodosActions.ADD_TODO_ERROR,
  payload,
});

const getTodo = (): Action<TodosActions> => ({
  type: TodosActions.GET_TODO,
});

const getTodoSuccess = (payload: Todo[]): ActionWithPayload<TodosActions, Todo[]> => ({
  type: TodosActions.GET_TODO_SUCCESS,
  payload,
});

const getTodoError = (payload: any): ActionWithPayload<TodosActions, any> => ({
  type: TodosActions.GET_TODO_ERROR,
  payload,
});

// thunk
