import { handleErrors } from "../../../shared/scripts/utils";
import { initialConfig } from "../../../shared/settings/initialConfig";
import { Registration } from "../../../../../types/interfaces";

export enum registerActions {
  SAVE_REGISTER_DATA,
  SAVE_REGISTER_DATA_SUCCESS,
  SAVE_REGISTER_DATA_ERROR,
}

export const saveRegisterData = (payload: Registration) => ({
  type: registerActions.SAVE_REGISTER_DATA,
  payload: payload,
});

export const saveRegisterDataSuccess = () => ({
  type: registerActions.SAVE_REGISTER_DATA_SUCCESS,
});

export const saveRegisterDataError = () => ({
  type: registerActions.SAVE_REGISTER_DATA_ERROR,
});

// thunk
export const saveRegisterDataAndHandleError = () => (dispatch: Function) => {
  // dispatch(saveRegisterData());

  return fetch(initialConfig.apiUrl + "/stats/pomodoros", {
    method: "POST",
  })
    .then(handleErrors)
    .catch((error) => dispatch(saveRegisterDataError(error)));
};
