import { MainAction } from "../interfaces/mainAction.interface";
import { MainActions } from "../actions/main.actions";
import { MainState } from "../interfaces/mainState.interface";

const initialState: MainState = {
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

export const mainReducer = (state = initialState, action: MainAction) => {
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
        error: "todo handle error",
        isLoading: false,
      };
    default:
      return state;
  }
};
