import { handleErrors } from "../../../shared/scripts/utils";
import { initialConfig } from "../../../shared/settings/initialConfig";
import { Registration } from "../../../../../types/interfaces";

export enum AuthActions {
  SAVE_REGISTER_DATA,
  SAVE_REGISTER_DATA_SUCCESS,
  SAVE_REGISTER_DATA_ERROR,
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
  console.log("dispatching");

  dispatch(saveRegisterData(form));

  return fetch(initialConfig.apiUrl + "/stats/pomodoros", {
    method: "POST",
  })
    .then(handleErrors)
    .catch((error) => dispatch(saveRegisterDataError(error)));
};
