import { ActionWithPayload } from "../../../shared/store/interfaces/actions/action.interface";
import { SettingsActions } from "../actions/actions";

interface State {
  settings: object;
}

const initialState: State = {
  settings: [],
};

export const settingsReducer = (
  state = initialState,
  action: ActionWithPayload<SettingsActions, any>
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
