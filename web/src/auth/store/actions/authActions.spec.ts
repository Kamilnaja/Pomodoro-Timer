import { Action } from 'redux';
import * as actions from './authActions';
import { setUserIsLoggedOut } from './authActions';
import { RESET_FORM } from './authActionsTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('actions', () => {
  it('should create an auth action', () => {
    const expectedAction: Action = {
      type: RESET_FORM,
    };

    expect(actions.resetForm()).toEqual(expectedAction);
  });

  it('should remove token on logging out', async () => {
    const store = mockStore();
    jest.spyOn(window.localStorage.__proto__, 'removeItem');

    window.localStorage.__proto__.removeItem = jest.fn();
    setUserIsLoggedOut();
    store.dispatch();
    expect(localStorage.removeItem).toHaveBeenCalled();
  });
});
