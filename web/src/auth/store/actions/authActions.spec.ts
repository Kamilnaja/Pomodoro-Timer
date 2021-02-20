import { Action } from 'redux';
import * as actions from './authActions';
import { AuthAction } from './authActions';

describe('actions', () => {
  it('should create an auth action', () => {
    const expectedAction: Action = {
      type: AuthAction.RESET_FORM,
    };

    expect(actions.resetForm()).toEqual(expectedAction);
  });
});
