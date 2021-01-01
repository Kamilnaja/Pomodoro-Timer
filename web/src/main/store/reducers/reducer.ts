import { Action } from "../../../shared/store/interfaces/action.interface";
import { MainActions } from "../actions/main.actions";
import { MainState } from "../interfaces/mainState.interface";

export const initialState: MainState = {
  isLoading: false,
  error: "",
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
      };
    case MainActions.SAVE_POMODORO_ERROR:
      return {
        ...state,
        error: "Something went wrong",
        isLoading: false,
      };
    default:
      return state;
  }
};
