import { Action } from "../../../shared/store/interfaces/action";
import { MainActions } from "../actions/actions";
import { Reducer } from "../interfaces/reducer.interface";

export const initialState: Reducer = {
  isLoading: false,
  isError: false,
  data: [],
};

export const main = (state = initialState, action: Action) => {
  switch (action.type) {
    case MainActions.SAVE_POMODORO:
      return {
        ...state,
        isLoading: true,
      };
    case MainActions.SAVE_POMODORO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case MainActions.SAVE_POMODORO_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
