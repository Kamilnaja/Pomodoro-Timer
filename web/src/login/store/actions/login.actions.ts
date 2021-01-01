import { initialConfig } from "../../../shared/settings/initialConfig";

export enum LoginActions {
  SAVE_REGISTER_DATA,
  SAVE_REGISTER_DATA_SUCCESS,
  SAVE_REGISTER_DATA_ERROR,
}

export const saveRegisterData = () => ({
  type: LoginActions.SAVE_REGISTER_DATA,
});

export const saveRegisterDataSuccess = () => ({
  type: LoginActions.SAVE_REGISTER_DATA_SUCCESS,
});

export const saveRegisterDataError = () => ({
  type: LoginActions.SAVE_REGISTER_DATA_ERROR,
});

// thunk

const makePostRequest = () => {
  fetch(initialConfig.apiUrl + "/auth");
};
