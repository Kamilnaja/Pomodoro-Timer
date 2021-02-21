import { RootStateOrAny } from 'react-redux';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AuthError, Login, LoginResponse, Registration } from '../../../../../types/authInterfaces';
import { updateData } from '../../../shared/scripts/requests';
import {
  AuthActionsTypes,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  RESET_FORM,
  SET_LOGGED_OUT,
} from './authActionsTypes';

const localStorageKey = 'token';

export const register = (payload: Registration): AuthActionsTypes => ({
  type: REGISTER,
  payload,
});

const registerSuccess = (): AuthActionsTypes => ({
  type: REGISTER_SUCCESS,
});

const registerError = (error: any): AuthActionsTypes => ({
  type: REGISTER_ERROR,
  payload: error,
});

export const login = (payload: Login): AuthActionsTypes => ({
  type: LOGIN,
  payload,
});

export const loginSuccess = (payload: string): AuthActionsTypes => ({
  type: LOGIN_SUCCESS,
  payload,
});

const loginError = (error: AuthError): AuthActionsTypes => ({
  type: LOGIN_ERROR,
  payload: error,
});

export const resetForm = (): Action => ({
  type: RESET_FORM,
});

export const setLoggedOut = (): Action => ({
  type: SET_LOGGED_OUT,
});

// thunk
export const sendRegisterForm = (
  formData: Registration,
): ThunkAction<void, RootStateOrAny, unknown, Action<AuthActionsTypes>> => (
  dispatch: (action: AuthActionsTypes) => void,
) => {
  dispatch(register(formData));

  updateData('auth/register', formData, 'POST')
    .then(() => {
      dispatch(registerSuccess());
    })
    .catch((response: AuthError) => {
      dispatch(registerError(response));
    });
};

export const sendLoginForm = (formData: Login) => async (dispatch: (action: AuthActionsTypes) => void) => {
  dispatch(login(formData));

  updateData('auth/login', formData, 'POST')
    .then((response: LoginResponse) => {
      localStorage.setItem(localStorageKey, response.token);
      dispatch(loginSuccess(response.token));
    })
    .catch((response: AuthError) => {
      dispatch(loginError(response));
    });
};

export const setUserIsLoggedIn = () => (dispatch: (action: AuthActionsTypes) => void) => {
  const token = localStorage.getItem(localStorageKey);

  if (token) {
    return dispatch(loginSuccess(token));
  }
};

export const setUserIsLoggedOut = (): ThunkAction<void, RootStateOrAny, unknown, Action<AuthActionsTypes>> => (
  dispatch: (action: AuthActionsTypes) => void,
) => {
  localStorage.removeItem(localStorageKey);

  dispatch(setLoggedOut());
};
