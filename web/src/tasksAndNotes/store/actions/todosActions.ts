import { Action } from 'redux';
import TodosSearchResults, { Todo } from '../../../../../types/tasksAndNotesInterfaces';
import { config } from '../../../shared/settings/initialConfig';
import { ActionWithPayload } from '../../../shared/store/interfaces/actions/actionInterface';
import { store } from '../../../shared/store/reducers/reducer';

export enum TodosActions {
  ADD_TODO = 'add todo',
  ADD_TODO_SUCCESS = 'add todo success',
  ADD_TODO_ERROR = 'add todo error',

  GET_TODOS = 'get todos',
  GET_TODOS_SUCCESS = 'get todos success',
  GET_TODOS_ERROR = 'get todos error',
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

const getTodos = (): Action<TodosActions> => ({
  type: TodosActions.GET_TODOS,
});

const getTodosSuccess = (payload: TodosSearchResults): ActionWithPayload<TodosActions, TodosSearchResults> => ({
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
  makeGetTodosRequest()
    .then((payload: TodosSearchResults) => dispatch(getTodosSuccess(payload)))
    .catch(err => getTodosError(err));
};

const makeGetTodosRequest = async (): Promise<TodosSearchResults> => {
  const token = store.getState().auth.token;

  const response = await fetch(`${config.url.API_URL}/todos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const responseBody = await response.json();

  return response.ok ? Promise.resolve(responseBody) : Promise.reject(responseBody);
};
