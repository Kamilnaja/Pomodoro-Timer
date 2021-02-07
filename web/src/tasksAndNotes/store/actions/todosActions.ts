import { Action } from 'redux';
import { Task, TaskSearchResults } from '../../../../../types/tasksAndNotesInterfaces';
import { fetchData, postData } from '../../../shared/scripts/requests';
import { config } from '../../../shared/settings/initialConfig';
import { ActionWithPayload } from '../../../shared/store/interfaces/actions/actionInterface';
import { store } from '../../../shared/store/reducers/reducer';

export enum TodosActions {
  SAVE_TODO = 'Save todo',
  SAVE_TODO_SUCCESS = 'Save todo success',
  SAVE_TODO_ERROR = 'Save todo error',

  GET_TODOS = 'get todos',
  GET_TODOS_SUCCESS = 'get todos success',
  GET_TODOS_ERROR = 'get todos error',
}

const saveTodo = (): Action<TodosActions> => ({
  type: TodosActions.SAVE_TODO,
});

const saveTodoError = (payload: any): ActionWithPayload<TodosActions, any> => ({
  type: TodosActions.SAVE_TODO_ERROR,
  payload,
});

const getTodos = (): Action<TodosActions> => ({
  type: TodosActions.GET_TODOS,
});

const getTodosSuccess = (payload: TaskSearchResults): ActionWithPayload<TodosActions, TaskSearchResults> => ({
  type: TodosActions.GET_TODOS_SUCCESS,
  payload,
});

const getTodosError = (payload: any): ActionWithPayload<TodosActions, any> => ({
  type: TodosActions.GET_TODOS_ERROR,
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
  postData('todos', payload)
    .then(() => dispatch(handleGetTodos()))
    .catch((err: any) => dispatch(saveTodoError(err)));
};
