import { TaskSearchResults } from '../../../../../../types/tasksAndNotesInterfaces';

export const SAVE_TODO = 'SAVE_TODO';
export const SAVE_TODO_SUCCESS = 'SAVE_TODO_SUCCESS';
export const SAVE_TODO_ERROR = 'SAVE_TODO_ERROR';
export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR';

interface SaveTodoAction {
  type: typeof SAVE_TODO;
}

interface SaveTodoSuccessAction {
  type: typeof SAVE_TODO_SUCCESS;
}

interface SaveTodoErrorAction {
  type: typeof SAVE_TODO_ERROR;
  payload: any;
}

interface GetTodosAction {
  type: typeof GET_TODOS;
}

interface GetTodosSuccessAction {
  type: typeof GET_TODOS_SUCCESS;
  payload: TaskSearchResults;
}

interface GetTodosErrorAction {
  type: typeof GET_TODOS_ERROR;
  payload: any;
}

export type TodosActionsTypes =
  | SaveTodoAction
  | SaveTodoSuccessAction
  | SaveTodoErrorAction
  | GetTodosAction
  | GetTodosSuccessAction
  | GetTodosErrorAction;
