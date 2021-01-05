import { SettingsActions } from "../actions/actions";
import { SettingsAction } from "../interfaces/settingsAction.interface";

interface State {
  settings: object;
}

const initialState: State = {
  settings: [],
};

export const settingsReducer = (
  state = initialState,
  action: SettingsAction
): State => {
  // todo - stub
  switch (action.type) {
    case SettingsActions.GET_SETTINGS:
      return {
        ...state,
        settings: action.payload,
      };

    default:
      return state;
  }
};
