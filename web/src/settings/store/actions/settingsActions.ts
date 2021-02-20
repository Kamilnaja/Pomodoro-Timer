import { Settings } from '../../../../../types/settingsInterface';
import { updateData } from '../../../shared/scripts/requests';
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

const getSettings = (): SettingsActionsType => ({
  type: GET_SETTINGS,
});

const getSettingsSuccess = (payload: Settings): SettingsActionsType => ({
  type: GET_SETTINGS_SUCCESS,
  payload,
});

const getSettingsError = (payload: Error): SettingsActionsType => ({
  type: GET_SETTINGS_ERROR,
  payload: payload,
});

const saveSettings = (): SettingsActionsType => ({
  type: SAVE_SETTINGS,
});

const saveSettingsSuccess = (): SettingsActionsType => ({
  type: SAVE_SETTINGS_SUCCESS,
});

const saveSettingsError = (payload: Error): SettingsActionsType => ({
  type: SAVE_SETTINGS_ERROR,
  payload,
});

// thunk
export const handleSaveCookieConsent = (settings: Settings) => (dispatch: (action: SettingsActionsType) => void) => {
  dispatch(saveSettings());

  updateData(`${config.url.API_URL}/settings`, settings, 'PUT')
    .then(() => {
      dispatch(saveSettingsSuccess());
    })
    .catch((error: any) => {
      dispatch(saveSettingsError(error));
    });
};
