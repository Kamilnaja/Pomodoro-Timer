import { ActionWithPayload } from 'shared/store/interfaces/actions/actionInterface';
import { SettingsAction } from '../actions/actions';

interface State {
  settings: object;
}

const initialState: State = {
  settings: [],
};

export const settingsReducer = (state = initialState, action: ActionWithPayload<SettingsAction, any>): State => {
  switch (action.type) {
    case SettingsAction.GET_SETTINGS:
      return {
        ...state,
        settings: action.payload,
      };
    default:
      return state;
  }
};