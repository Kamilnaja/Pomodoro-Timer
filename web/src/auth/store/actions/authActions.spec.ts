import { Action } from 'redux';
import { createLoginData, createRegistrationData } from '../../testing/auth.testing.data';
import * as actions from './authActions';
import { login, register, setLoggedOut, setUserIsLoggedOut } from './authActions';
import { RESET_FORM } from './authActionsTypes';

describe('actions', () => {
  it('should create an auth action', () => {
    const expectedAction: Action = {
      type: RESET_FORM,
    };

    expect(actions.resetForm()).toEqual(expectedAction);
  });

  it('should sendRegisterForm', () => {
    const dispatch = jest.fn();

    actions.sendRegisterForm(createRegistrationData())(dispatch, null, null);

    expect(dispatch).toHaveBeenCalledWith(register(createRegistrationData()));
  });

  it('should sendLoginForm', () => {
    jest.spyOn(localStorage.__proto__, 'setItem');

    const dispatch = jest.fn();
    actions.sendLoginForm(createLoginData())(dispatch);

    // expect(localStorage.setItem).toHaveBeenCalledWith('token');
    expect(dispatch).toHaveBeenCalledWith(login(createLoginData()));
  });

  it('should get token on logging in', () => {
    jest.spyOn(localStorage.__proto__, 'getItem').mockReturnValue('hello');
    const dispatch = jest.fn();
    actions.setUserIsLoggedIn()(dispatch);

    expect(localStorage.getItem).toHaveBeenCalledWith('token');
    expect(dispatch).toHaveBeenCalledWith(actions.loginSuccess('hello'));
  });

  it('should remove token on logging out', () => {
    jest.spyOn(localStorage.__proto__, 'removeItem');
    const dispatch = jest.fn();
    setUserIsLoggedOut()(dispatch, null, null);

    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
    expect(dispatch).toHaveBeenCalledWith(setLoggedOut());
  });
});
