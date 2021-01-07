import { handleErrors } from "../../../shared/scripts/utils";
import { initialConfig } from "../../../shared/settings/initialConfig";
import { Login, Registration } from "../../../../../types/interfaces";

export enum AuthActions {
  SAVE_REGISTER_DATA = "SAVE_REGISTER_DATA",
  SAVE_REGISTER_DATA_SUCCESS = "SAVE_REGISTER_DATA_SUCCESS",
  SAVE_REGISTER_DATA_ERROR = "SAVE_REGISTER_DATA_ERROR",
  SAVE_LOGIN_DATA = "SAVE_LOGIN_DATA",
  SAVE_LOGIN_DATA_SUCCESS = "SAVE_LOGIN_DATA_SUCCESS",
  SAVE_LOGIN_DATA_ERROR = "SAVE_LOGIN_DATA_ERROR",
}

export const saveRegisterData = (payload: Registration) => ({
  type: AuthActions.SAVE_REGISTER_DATA,
  payload: payload,
});

export const saveRegisterDataSuccess = () => ({
  type: AuthActions.SAVE_REGISTER_DATA_SUCCESS,
});

export const saveRegisterDataError = (error: any) => ({
  type: AuthActions.SAVE_REGISTER_DATA_ERROR,
  payload: error,
});

export const saveLoginData = (payload: Login) => ({
  type: AuthActions.SAVE_LOGIN_DATA,
  payload: payload,
});

export const saveLoginDataSuccess = () => ({
  type: AuthActions.SAVE_LOGIN_DATA_SUCCESS,
});

export const saveLoginDataError = (error: any) => ({
  type: AuthActions.SAVE_LOGIN_DATA_ERROR,
  payload: error,
});

// thunk
export const registerAction = (form: Registration) => (dispatch: Function) => {
  dispatch(saveRegisterData(form));

  return fetch(initialConfig.apiUrl + "/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  }).then((response) => {
    if (!response.ok) {
      dispatch(saveRegisterDataError(response.statusText));
    } else {
      dispatch(saveRegisterDataSuccess());
    }
  });
};

export const loginAction = (form: Login) => (dispatch: Function) => {
  dispatch(saveLoginData(form));

  return fetch(initialConfig.apiUrl + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })
    .then(handleErrors)
    .then(() => {
      dispatch(saveLoginDataSuccess());
    })
    .catch((error) => dispatch(saveLoginDataError(error)));
};
