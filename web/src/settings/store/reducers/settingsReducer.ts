import {
  GET_SETTINGS,
  GET_SETTINGS_ERROR,
  GET_SETTINGS_SUCCESS,
  SettingsActionsType,
} from '../actions/settingsActionsTypes';
import { SettingsState } from '../interfaces/settingsInterfaces';

const initialState: SettingsState = {
  isLoading: false,
  error: null,
  settings: {
    isCookieConsentAccepted: false,
    isSoundEnabled: true,
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

    default:
      return state;
  }
};
