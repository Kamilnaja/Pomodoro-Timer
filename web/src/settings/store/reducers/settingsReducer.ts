import {
  GET_SETTINGS,
  GET_SETTINGS_ERROR,
  GET_SETTINGS_SUCCESS,
  HIDE_COOKIE_INFO,
  SAVE_SETTINGS,
  SAVE_SETTINGS_ERROR,
  SAVE_SETTINGS_SUCCESS,
  SettingsActionsType,
  SET_DISPLAY_DIRECTION,
  SET_DISPLAY_EMPTY_DAYS,
} from '../actions/settingsActionsTypes';
import { SettingsState, DisplayDirection } from '../interfaces/settingsInterfaces';

export const settingsReducerInitialState: SettingsState = {
  isLoading: false,
  error: null,
  isCookieAcceptInfoVisible: true,
  settings: {
    isCookieConsentAccepted: false,
    isSoundEnabled: true,
    displayDirection: DisplayDirection.ASC,
    displayEmptyDays: false,
  },
};

export const settingsReducer = (state = settingsReducerInitialState, action: SettingsActionsType): SettingsState => {
  switch (action.type) {
    case GET_SETTINGS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: action.payload,
        isLoading: false,
      };
    case GET_SETTINGS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case SAVE_SETTINGS:
      return {
        ...state,
        isLoading: true,
      };
    case SAVE_SETTINGS_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        isCookieAcceptInfoVisible: false, // todo - not always valid
      };
    case SAVE_SETTINGS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case HIDE_COOKIE_INFO:
      return {
        ...state,
        isCookieAcceptInfoVisible: false,
      };
    case SET_DISPLAY_DIRECTION:
      return {
        ...state,
        settings: {
          ...state.settings,
          displayDirection: action.payload,
        },
      };
    case SET_DISPLAY_EMPTY_DAYS:
      return {
        ...state,
        settings: {
          ...state.settings,
          displayEmptyDays: action.payload,
        },
      };
    default:
      return state;
  }
};
