import { Action } from "redux";
import { Login, LoginResponse, Registration } from "../../../../../types/interfaces";
import { handleErrors } from "../../../shared/scripts/utils";
import { config } from "../../../shared/settings/initialConfig";
import { ActionWithPayload } from "../../../shared/store/interfaces/actions/action.interface";

export enum AuthAction {
  REGISTER = "REGISTER",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_ERROR = "REGISTER_ERROR",

  LOGIN = "LOGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_ERROR = "LOGIN_ERROR",

  RESET_FORM = "RESET_FORM",
}

export const register = (payload: Registration): ActionWithPayload<AuthAction, Registration> => ({
  type: AuthAction.REGISTER,
  payload,
});

export const registerSuccess = (): Action => ({
  type: AuthAction.REGISTER_SUCCESS,
});

export const registerError = (error: any): ActionWithPayload<AuthAction, Error> => ({
  type: AuthAction.REGISTER_ERROR,
  payload: error,
});

export const login = (payload: Login): ActionWithPayload<AuthAction, Login> => ({
  type: AuthAction.LOGIN,
  payload,
});

export const loginSuccess = (): Action => ({
  type: AuthAction.LOGIN_SUCCESS,
});

export const loginError = (error: Error): ActionWithPayload<AuthAction, Error> => ({
  type: AuthAction.LOGIN_ERROR,
  payload: error,
});

export const resetForm = () => ({
  type: AuthAction.RESET_FORM,
});

// thunk
export const sendRegisterForm = (formData: Registration) => (dispatch: (arg0: Action<any>) => void) => {
  dispatch(register(formData));

  return fetch(`${config.url.API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then(response => {
    if (!response.ok) {
      dispatch(registerError(response));
    } else {
      dispatch(registerSuccess());
    }
  });
};

export const sendLoginForm = (formData: Login) => (dispatch: (action: Action<any>) => void) => {
  dispatch(login(formData));

  return fetch(`${config.url.API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then(handleErrors)
    .then(response => response.json())
    .then((response: LoginResponse) => {
      // todo - cookie
      localStorage.setItem("token", response.token);
      dispatch(loginSuccess());
    })
    .catch(error => dispatch(loginError(error)));
};
