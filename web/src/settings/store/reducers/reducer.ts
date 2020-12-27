import { Action } from "../../../shared/store/interfaces/action.interface";
import { SettingsActions } from "../actions/actions";

interface State {
  settings: object;
}

const initialState: State = {
  settings: [],
};

export const reducer = (state = initialState, action: Action): State => {
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
