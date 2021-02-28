import { Action } from 'redux';
import { Settings } from '../../../../../types/settingsInterface';
import { fetchData, updateData } from '../../../shared/scripts/requests';
import { cookieConsentAcceptationKey } from '../../../shared/settings/initialConfig';
import { DisplayDirection } from '../interfaces/settingsInterfaces';
import {
  GET_SETTINGS,
  GET_SETTINGS_ERROR,
  GET_SETTINGS_SUCCESS,
  HIDE_COOKIE_INFO,
  SAVE_SETTINGS,
  SAVE_SETTINGS_ERROR,
  SAVE_SETTINGS_SUCCESS,
  SET_DISPLAY_DIRECTION,
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

export const hideCookieInfo = (): SettingsActionsType => ({
  type: HIDE_COOKIE_INFO,
});

export const toggleDisplayDirection = (payload: DisplayDirection): SettingsActionsType => ({
  type: SET_DISPLAY_DIRECTION,
  payload,
});

export const handleGetSettings = () => (dispatch: (action: SettingsActionsType) => void) => {
  dispatch(getSettings());

  fetchData('settings')
    .then((payload: Settings) => {
      localStorage.setItem(cookieConsentAcceptationKey, JSON.stringify(payload.isCookieConsentAccepted));
      dispatch(getSettingsSuccess(payload));
      window.localStorage.setItem(cookieConsentAcceptationKey, JSON.stringify(payload.isCookieConsentAccepted));
    })
    .catch(error => {
      dispatch(getSettingsError(error));
    });
};

// thunk
export const handleSaveSettings = (settings: Settings) => (dispatch: (arg: Action | any) => void) => {
  dispatch(saveSettings());

  updateData(`settings`, settings, 'PUT')
    .then(() => dispatch(handleGetSettings()))
    .catch((error: any) => dispatch(saveSettingsError(error)));
};
