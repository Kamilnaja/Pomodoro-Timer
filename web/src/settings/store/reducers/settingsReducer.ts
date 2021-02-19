import { ActionWithPayload } from 'store/interfaces/actions/actionInterface';
import { Settings } from '../../../../../types/settingsInterface';

interface State {
  settings: Settings;
  isLoading: boolean;
  error: string;
}

const initialState: State = {
  isLoading: false,
  error: null,
  settings: {
    isCookieConsentAccepted: false,
    isSoundEnabled: true,
  },
};

export const settingsReducer = (state = initialState, action: ActionWithPayload<SettingsAction, any>): State => {
  switch (action.type) {
    case SettingsAction.GET_SETTINGS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case SettingsAction.GET_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: action.payload,
        isLoading: false,
        error: null,
      };
    case SettingsAction.GET_SETTINGS_ERROR:
      return {
        ...state,
        settings: action.payload,
      };

    default:
      return state;
  }
};
