import { createLoginData, createRegistrationData } from '../../testing/auth.testing.data';
import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  RESET_FORM,
  SET_LOGGED_OUT,
} from '../actions/authActionsTypes';
import { authReducer } from './authReducer';
import { authInitialState } from './initialState';

describe('authReducer', () => {
  it('should render the initial state', () => {
    expect(authReducer(undefined, { type: null })).toEqual(authInitialState);
  });

  it('should handle REGISTER', () => {
    expect(
      authReducer(undefined, {
        type: REGISTER,
        payload: createRegistrationData(),
      }),
    ).toEqual({
      ...authInitialState,
      isLoading: true,
    });
  });

  it('should handle REGISTER_ERROR', () => {
    expect(
      authReducer(undefined, {
        type: REGISTER_ERROR,
        payload: 'error',
      }),
    ).toEqual({
      ...authInitialState,
      error: 'error',
    });
  });

  it('should handle REGISTER_SUCCESS', () => {
    expect(
      authReducer(undefined, {
        type: REGISTER_SUCCESS,
      }),
    ).toEqual({
      ...authInitialState,
      isLoading: false,
      isSuccess: true,
      error: null,
    });
  });

  it('should handle LOGIN', () => {
    expect(
      authReducer(undefined, {
        type: LOGIN,
        payload: createLoginData(),
      }),
    ).toEqual({
      ...authInitialState,
      isLoading: true,
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      authReducer(undefined, {
        type: LOGIN_SUCCESS,
        payload: 'hello world',
      }),
    ).toEqual({
      ...authInitialState,
      isLoading: false,
      isSuccess: true,
      isLoggedIn: true,
      token: 'hello world',
      error: null as any,
    });
  });

  it('should handle LOGIN_ERROR', () => {
    expect(
      authReducer(undefined, {
        type: LOGIN_ERROR,
        payload: 'hello world',
      }),
    ).toEqual({
      ...authInitialState,
      isLoading: false,
      error: 'hello world',
    });
  });

  it('should handle RESET_FORM', () => {
    expect(
      authReducer(undefined, {
        type: RESET_FORM,
      }),
    ).toEqual({
      ...authInitialState,
      isLoading: false,
      isSuccess: false,
      error: null,
    });
  });

  it('should handle SET_LOGGED_OUT', () => {
    expect(
      authReducer(undefined, {
        type: SET_LOGGED_OUT,
      }),
    ).toEqual({
      ...authInitialState,
      isLoggedIn: false,
      token: '',
    });
  });
});
