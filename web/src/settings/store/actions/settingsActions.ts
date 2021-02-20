import { Settings } from '../../../../../types/settingsInterface';
import { config } from '../../../shared/settings/initialConfig';
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

// thunk
export const handleSaveCookieConsent = (settings: Settings) => (dispatch: (action: SettingsActionsType) => void) => {
  dispatch(saveSettings());

  makePostRequest(settings)
    .then(() => {
      dispatch(saveSettingsSuccess());
    })
    .catch((error: any) => {
      dispatch(saveSettingsError(error));
    });
};

const makePostRequest = async (formData: Settings) => {
  const response: Response = await fetch(`${config.url.API_URL}/settings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const requestBody = await response.json();

  return response.ok ? Promise.resolve(requestBody) : Promise.reject(requestBody);
};
