import { Settings } from '../../../../../types/settingsInterface';
import { DisplayDirection } from '../interfaces/settingsInterfaces';

export const GET_SETTINGS = 'GET_SETTINGS';
export const GET_SETTINGS_SUCCESS = 'GET_SETTINGS_SUCCESS';
export const GET_SETTINGS_ERROR = 'GET_SETTINGS_ERROR';
export const SAVE_SETTINGS = 'SAVE_SETTINGS';
export const SAVE_SETTINGS_SUCCESS = 'SAVE_SETTINGS_SUCCESS';
export const SAVE_SETTINGS_ERROR = 'SAVE_SETTINGS_ERROR';
export const HIDE_COOKIE_INFO = 'HIDE_COOKIE_INFO';
export const SET_DISPLAY_DIRECTION = 'SET_DISPLAY_DIRECTION';

export type HandleGetSettings = () => void;
export type HandleSaveSettings = (settings: Settings) => void;
export type ToggleDisplayDirection = () => void;

interface GetSettingsAction {
  type: typeof GET_SETTINGS;
}

interface GetSettingsSuccessAction {
  type: typeof GET_SETTINGS_SUCCESS;
  payload: Settings;
}

interface GetSettingsErrorAction {
  type: typeof GET_SETTINGS_ERROR;
  payload: Error;
}

interface SaveSettingsAction {
  type: typeof SAVE_SETTINGS;
}

interface SaveSettingsSuccessAction {
  type: typeof SAVE_SETTINGS_SUCCESS;
}

interface SaveSettingsErrorAction {
  type: typeof SAVE_SETTINGS_ERROR;
  payload: Error;
}

interface HideCookieInfoAction {
  type: typeof HIDE_COOKIE_INFO;
}

interface SetDisplayDirection {
  type: typeof SET_DISPLAY_DIRECTION;
  payload: DisplayDirection;
}

export type SettingsActionsType =
  | GetSettingsAction
  | GetSettingsSuccessAction
  | GetSettingsErrorAction
  | SaveSettingsAction
  | SaveSettingsSuccessAction
  | SaveSettingsErrorAction
  | HideCookieInfoAction
  | SetDisplayDirection;
