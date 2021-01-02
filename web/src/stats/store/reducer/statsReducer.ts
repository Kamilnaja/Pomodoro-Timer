import { StatsActions } from "../actions/stats.actions";
import { StatsAction } from "../interfaces/statsAction";

export const initialState = {
  isLoading: false,
  error: "",
  pomodorosDoneToday: 0,
  allPomodoros: 0,
};

export const stats = (state = initialState, action: StatsAction) => {
  switch (action.type) {
    case StatsActions.GET_TODAY_STATISTICS:
      return {
        ...state,
        isLoading: true,
      };
    case StatsActions.GET_TODAY_STATISTICS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pomodorosDoneToday: action.payload.pomodorosDoneToday,
        allPomodoros: action.payload.allPomodoros,
      };
    case StatsActions.GET_TODAY_STATISTICS_ERROR:
      return {
        ...state,
        error: "something went wrong",
        isLoading: false,
      };
    case StatsActions.INCREMENT_POMODOROS:
      return {
        ...state,
        pomodorosDoneToday: state.pomodorosDoneToday + 1,
      };
    default:
      return state;
  }
};
