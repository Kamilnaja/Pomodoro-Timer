import {
  GET_SETTINGS,
  GET_SETTINGS_ERROR,
  GET_SETTINGS_SUCCESS,
  HIDE_COOKIE_INFO,
  SAVE_SETTINGS,
  SAVE_SETTINGS_ERROR,
  SAVE_SETTINGS_SUCCESS,
  SettingsActionsType,
} from '../actions/settingsActionsTypes';
import { SettingsState, SortDirection } from '../interfaces/settingsInterfaces';

const initialState: SettingsState = {
  isLoading: false,
  error: null,
  isCookieAcceptInfoVisible: true,
  settings: {
    isCookieConsentAccepted: false,
    isSoundEnabled: true,
    sortDirection: SortDirection.ASC,
  },
};

export const settingsReducer = (state = initialState, action: SettingsActionsType): SettingsState => {
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
        isCookieAcceptInfoVisible: false,
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
    default:
      return state;
  }
};
