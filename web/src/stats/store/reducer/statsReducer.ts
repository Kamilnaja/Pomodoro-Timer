import { ActionWithPayload } from "../../../shared/store/interfaces/actions/action.interface";
import TodayStatistics from "../../../shared/store/interfaces/todayStatistics.interface";
import { StatsAction } from "../actions/stats.actions";

export const initialState = {
  isLoading: false,
  error: "",
  pomodorosDoneToday: 0,
  allPomodoros: 0,
};

export const statsReducer = (state = initialState, action: ActionWithPayload<StatsAction, TodayStatistics>) => {
  switch (action.type) {
    case StatsAction.GET_TODAY_STATISTICS:
      return {
        ...state,
        isLoading: true,
      };
    case StatsAction.GET_TODAY_STATISTICS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pomodorosDoneToday: action.payload?.result,
      };
    case StatsAction.GET_TODAY_STATISTICS_ERROR:
      return {
        ...state,
        error: "something went wrong",
        isLoading: false,
      };
    case StatsAction.INCREMENT_POMODOROS:
      return {
        ...state,
        pomodorosDoneToday: Number(state.pomodorosDoneToday) + 1,
      };
    default:
      return state;
  }
};
