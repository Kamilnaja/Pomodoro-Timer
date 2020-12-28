import { Action } from "../../../shared/store/interfaces/action.interface";
import { MainActions } from "../actions/actions";
import { MainState } from "../interfaces/mainState.interface";

export const initialState: MainState = {
  isLoading: false,
  error: "",
  pomodorosDoneToday: 0,
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
        pomodorosDoneToday: state.pomodorosDoneToday + 1,
      };
    case MainActions.SAVE_POMODORO_ERROR:
      return {
        ...state,
        error: "Something went wrong",
        isLoading: false,
      };
    case MainActions.GET_TODAY_STATISTICS:
      return {
        ...state,
        isLoading: true,
      };
    case MainActions.GET_TODAY_STATISTICS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pomodorosDoneToday: action.payload.pomodorosDoneToday,
      };
    case MainActions.GET_TODAY_STATISTICS_ERROR:
      return {
        ...state,
        error: "something went wrong",
        isLoading: false,
      };
    default:
      return state;
  }
};
