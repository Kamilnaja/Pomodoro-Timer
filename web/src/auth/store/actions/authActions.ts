import { Action } from 'redux';
import { config } from 'shared/settings/initialConfig';
import { AuthError, Login, LoginResponse, Registration } from '../../../../../types/authInterfaces';
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

const register = (payload: Registration): AuthActionsTypes => ({
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

const login = (payload: Login): AuthActionsTypes => ({
  type: LOGIN,
  payload,
});

const loginSuccess = (payload: string): AuthActionsTypes => ({
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

const setLoggedOut = (): Action => ({
  type: SET_LOGGED_OUT,
});

// thunk
export const sendRegisterForm = (formData: Registration) => (dispatch: (action: AuthActionsTypes) => void) => {
  dispatch(register(formData));

  makeRegisterRequest(formData)
    .then(() => {
      dispatch(registerSuccess());
    })
    .catch((response: AuthError) => {
      dispatch(registerError(response));
    });
};

const makeRegisterRequest = async (formData: Registration) => {
  const response: Response = await fetch(`${config.url.API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  return response.ok ? Promise.resolve(responseBody) : Promise.reject(responseBody);
};

export const sendLoginForm = (formData: Login) => async (dispatch: (action: Action<any>) => void) => {
  dispatch(login(formData));

  makeLoginRequest(formData)
    .then((response: LoginResponse) => {
      localStorage.setItem(localStorageKey, response.token);
      dispatch(loginSuccess(response.token));
    })
    .catch((response: AuthError) => {
      dispatch(loginError(response));
    });
};

const makeLoginRequest = async (formData: Login) => {
  const response: Response = await fetch(`${config.url.API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const requestBody = await response.json();

  return response.ok ? Promise.resolve(requestBody) : Promise.reject(requestBody);
};

export const setUserIsLoggedIn = () => (dispatch: (action: Action<any>) => void) => {
  const token = localStorage.getItem(localStorageKey);

  if (token) {
    dispatch(loginSuccess(token));
  }
};

export const setUserIsLoggedOut = () => (dispatch: (action: AuthActionsTypes) => void) => {
  localStorage.removeItem(localStorageKey);

  dispatch(setLoggedOut());
};
