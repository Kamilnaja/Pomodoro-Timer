import { Registration } from "../../../../../types/interfaces";
import { initialConfig } from "../../../shared/settings/initialConfig";

export enum AuthActions {
  SAVE_REGISTER_DATA = "SAVE_REGISTER_DATA",
  SAVE_REGISTER_DATA_SUCCESS = "SAVE_REGISTER_DATA_SUCCESS",
  SAVE_REGISTER_DATA_ERROR = "SAVE_REGISTER_DATA_ERROR",
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

// thunk

export const saveRegisterDataAndHandleError = (form: Registration) => (
  dispatch: Function
) => {
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
