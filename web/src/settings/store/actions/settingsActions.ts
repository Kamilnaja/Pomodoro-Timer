import { Settings } from '../../../../../types/settingsInterface';
import { fetchData, updateData } from '../../../shared/scripts/requests';
import {
  GET_SETTINGS,
  GET_SETTINGS_ERROR,
  GET_SETTINGS_SUCCESS,
  SAVE_SETTINGS,
  SAVE_SETTINGS_ERROR,
  SAVE_SETTINGS_SUCCESS,
  SettingsActionsType,
} from './settingsActionsTypes';

export const getSettings = (): SettingsActionsType => ({
  type: GET_SETTINGS,
});

export const getSettingsSuccess = (payload: Settings): SettingsActionsType => ({
  type: GET_SETTINGS_SUCCESS,
  payload,
});

export const getSettingsError = (payload: Error): SettingsActionsType => ({
  type: GET_SETTINGS_ERROR,
  payload: payload,
});

export const saveSettings = (): SettingsActionsType => ({
  type: SAVE_SETTINGS,
});

export const saveSettingsSuccess = (): SettingsActionsType => ({
  type: SAVE_SETTINGS_SUCCESS,
});

export const saveSettingsError = (payload: Error): SettingsActionsType => ({
  type: SAVE_SETTINGS_ERROR,
  payload,
});

export const handleGetSettings = () => (dispatch: (action: SettingsActionsType) => void) => {
  dispatch(getSettings());

  fetchData(`settings`)
    .then((payload: Settings) => {
      dispatch(getSettingsSuccess(payload));
    })
    .catch(error => {
      dispatch(getSettingsError(error));
    });
};

// thunk
export const handleSaveSettings = (settings: Settings) => (dispatch: (action: SettingsActionsType) => void) => {
  dispatch(saveSettings());

  updateData(`settings`, settings, 'PUT')
    .then(() => dispatch(saveSettingsSuccess()))
    .catch((error: any) => dispatch(saveSettingsError(error)));
};
