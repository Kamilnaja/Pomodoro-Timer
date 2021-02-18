import { Action } from 'redux';
import { config } from 'shared/settings/initialConfig';
import { ActionWithPayload } from 'store/interfaces/actions/actionInterface';
import { AuthError, Login, LoginResponse, Registration } from '../../../../../types/authInterfaces';

const localStorageKey = 'token';

export enum AuthAction {
  REGISTER = 'REGISTER',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_ERROR = 'REGISTER_ERROR',

  LOGIN = 'LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',

  RESET_FORM = 'RESET_FORM',

  SET_LOGGED_IN = 'SET_LOGGED_IN',
  SET_LOGGED_OUT = 'SET_LOGGED_OUT',
}

const register = (payload: Registration): ActionWithPayload<AuthAction, Registration> => ({
  type: AuthAction.REGISTER,
  payload,
});

const registerSuccess = (): Action => ({
  type: AuthAction.REGISTER_SUCCESS,
});

const registerError = (error: any): ActionWithPayload<AuthAction, AuthError> => ({
  type: AuthAction.REGISTER_ERROR,
  payload: error,
});

const login = (payload: Login): ActionWithPayload<AuthAction, Login> => ({
  type: AuthAction.LOGIN,
  payload,
});

const loginSuccess = (payload: string): ActionWithPayload<AuthAction, string> => ({
  type: AuthAction.LOGIN_SUCCESS,
  payload,
});

const loginError = (error: AuthError): ActionWithPayload<AuthAction, AuthError> => ({
  type: AuthAction.LOGIN_ERROR,
  payload: error,
});

export const resetForm = (): Action => ({
  type: AuthAction.RESET_FORM,
});

const setLoggedOut = (): Action => ({
  type: AuthAction.SET_LOGGED_OUT,
});

// thunk
export const sendRegisterForm = (formData: Registration) => (dispatch: (action: Action<AuthAction>) => void) => {
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

export const setUserIsLoggedOut = () => (dispatch: (action: Action<AuthAction>) => void) => {
  localStorage.removeItem(localStorageKey);

  dispatch(setLoggedOut());
};
