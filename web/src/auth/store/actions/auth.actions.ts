import { Action } from "redux";
import { Login, Registration } from "../../../../../types/interfaces";
import { handleErrors } from "../../../shared/scripts/utils";
import { initialConfig } from "../../../shared/settings/initialConfig";
import { ActionWithPayload } from "../../../shared/store/interfaces/actions/action.interface";

export enum AuthAction {
  SAVE_REGISTER_DATA = "SAVE_REGISTER_DATA",
  SAVE_REGISTER_DATA_SUCCESS = "SAVE_REGISTER_DATA_SUCCESS",
  SAVE_REGISTER_DATA_ERROR = "SAVE_REGISTER_DATA_ERROR",

  SAVE_LOGIN_DATA = "SAVE_LOGIN_DATA",
  SAVE_LOGIN_DATA_SUCCESS = "SAVE_LOGIN_DATA_SUCCESS",
  SAVE_LOGIN_DATA_ERROR = "SAVE_LOGIN_DATA_ERROR",

  RESET_FORM = "RESET_FORM",
}

export const saveRegisterData = (
  payload: Registration
): ActionWithPayload<AuthAction, Registration> => ({
  type: AuthAction.SAVE_REGISTER_DATA,
  payload: payload,
});

export const saveRegisterDataSuccess = (): Action => ({
  type: AuthAction.SAVE_REGISTER_DATA_SUCCESS,
});

export const saveRegisterDataError = (
  error: any
): ActionWithPayload<AuthAction, Error> => ({
  type: AuthAction.SAVE_REGISTER_DATA_ERROR,
  payload: error,
});

export const saveLoginData = (
  payload: Login
): ActionWithPayload<AuthAction, Login> => ({
  type: AuthAction.SAVE_LOGIN_DATA,
  payload: payload,
});

export const saveLoginDataSuccess = (): Action => ({
  type: AuthAction.SAVE_LOGIN_DATA_SUCCESS,
});

export const saveLoginDataError = (
  error: any
): ActionWithPayload<AuthAction, Error> => ({
  type: AuthAction.SAVE_LOGIN_DATA_ERROR,
  payload: error,
});

export const resetForm = () => ({
  type: AuthAction.RESET_FORM,
});

// thunk
export const sendRegisterForm = (formData: Registration) => (
  dispatch: Function
) => {
  dispatch(saveRegisterData(formData));

  return fetch(`${initialConfig.apiUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then((response) => {
    if (!response.ok) {
      dispatch(saveRegisterDataError(response.statusText));
    } else {
      dispatch(saveRegisterDataSuccess());
    }
  });
};

export const sendLoginForm = (formData: Login) => (dispatch: Function) => {
  dispatch(saveLoginData(formData));

  return fetch(`${initialConfig.apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then(handleErrors)
    .then(() => {
      dispatch(saveLoginDataSuccess());
    })
    .catch((error) => dispatch(saveLoginDataError(error)));
};
