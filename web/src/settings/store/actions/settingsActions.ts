import { Action } from 'redux';
import { Settings } from '../../../../../types/settingsInterface';
import { ActionWithPayload } from '../../../store/interfaces/actions/actionInterface';

export enum SettingsActions {
  GET_SETTINGS = 'GET_SETTINGS',
  GET_SETTINGS_SUCCESS = 'GET_SETTINGS_SUCCESS',
  GET_SETTINGS_ERROR = 'GET_SETTINGS_ERROR',

  SAVE_SETTINGS = 'SAVE_SETTINGS',
  SAVE_SETTINGS_SUCCESS = 'SAVE_SETTINGS_SUCCESS',
  SAVE_SETTINGS_ERROR = 'SAVE_SETTINGS_ERROR',
}

export const getSettings = () => (): Action<SettingsActions> => ({
  type: SettingsActions.GET_SETTINGS,
});

export const getSettingsSuccess = (payload: Settings) => (): ActionWithPayload<SettingsActions, Settings> => ({
  type: SettingsActions.GET_SETTINGS_SUCCESS,
  payload,
});

export const getSettingsSuccessError = (payload: Error) => (): ActionWithPayload<SettingsActions, Error> => ({
  type: SettingsActions.GET_SETTINGS_SUCCESS,
  payload,
});

export const setSettings = (payload: Settings) => (): ActionWithPayload<SettingsActions, Settings> => ({
  type: SettingsActions.SAVE_SETTINGS,
  payload,
});

export const setSettingsSuccess = (): Action<SettingsActions> => ({
  type: SettingsActions.SAVE_SETTINGS_SUCCESS,
});

export const setSettingsError = (payload: Error) => (): ActionWithPayload<SettingsActions, Error> => ({
  type: SettingsActions.SAVE_SETTINGS_ERROR,
  payload,
});
