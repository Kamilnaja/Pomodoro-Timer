import * as actions from './todosActions';
import { SAVE_TODO, SAVE_TODO_ERROR, TodosActionsTypes } from './todosActionsTypes';

describe('todosActions', () => {
  it('should create an saveTodo action', () => {
    const expectedAction: TodosActionsTypes = {
      type: SAVE_TODO,
    };

    expect(actions.saveTodo()).toEqual(expectedAction);
  });

  it('should create an saveTodoError action', () => {
    const error = 'something wrong';
    const expectedAction: TodosActionsTypes = {
      type: SAVE_TODO_ERROR,
      payload: error,
    };

    expect(actions.saveTodoError(error)).toEqual(expectedAction);
  });
});
