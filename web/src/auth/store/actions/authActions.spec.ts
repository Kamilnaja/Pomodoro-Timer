import { Action } from 'redux';
import * as actions from './authActions';
import { RESET_FORM } from './authActionsTypes';

describe('actions', () => {
  it('should create an auth action', () => {
    const expectedAction: Action = {
      type: RESET_FORM,
    };

    expect(actions.resetForm()).toEqual(expectedAction);
  });
});
