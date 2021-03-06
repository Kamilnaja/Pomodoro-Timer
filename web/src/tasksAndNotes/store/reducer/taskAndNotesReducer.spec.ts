import { createTasks, createTasksServerResponse } from '../../testing/taskAndNotes.test.data';
import { GET_TODOS, GET_TODOS_ERROR, GET_TODOS_SUCCESS } from '../actions/todosActions/todosActionsTypes';
import { taskAndNotesInitialState, taskAndNotesReducer } from './taskAndNotesReducer';

describe('taskAndNotesReducer', () => {
  it('should render the initial state', () => {
    expect(taskAndNotesReducer(undefined, { type: null })).toEqual(taskAndNotesInitialState);
  });

  it('should handle get todos', () => {
    expect(
      taskAndNotesReducer(undefined, {
        type: GET_TODOS,
      }),
    ).toEqual({
      ...taskAndNotesInitialState,
      isLoading: true,
    });
  });

  it('should handle get todos success', () => {
    expect(
      taskAndNotesReducer(undefined, {
        type: GET_TODOS_SUCCESS,
        payload: createTasksServerResponse(),
      }),
    ).toEqual({
      ...taskAndNotesInitialState,
      isLoading: false,
      todos: createTasks(),
    });
  });

  it('should handle get todos error', () => {
    const error = 'error';
    expect(
      taskAndNotesReducer(undefined, {
        type: GET_TODOS_ERROR,
        payload: error,
      }),
    ).toEqual({
      ...taskAndNotesInitialState,
      isLoading: false,
      error: error,
    });
  });
});
