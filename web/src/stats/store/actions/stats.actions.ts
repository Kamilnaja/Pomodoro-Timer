import { Error } from "../../../../../types/interfaces";
import { handleErrors } from "../../../shared/scripts/utils";
import { initialConfig } from "../../../shared/settings/initialConfig";
import { ActionWithPayload } from "../../../shared/store/interfaces/actions/action.interface";
import TodayStatistics from "./../../../shared/store/interfaces/todayStatistics.interface";

export enum StatsActions {
  GET_TODAY_STATISTICS = "GET_TODAY_STATISTICS",
  GET_TODAY_STATISTICS_SUCCESS = "GET_TODAY_STATISTICS_SUCCESS",
  GET_TODAY_STATISTICS_ERROR = "GET_TODAY_STATISTICS_ERROR",
  INCREMENT_POMODOROS = "INCREMENT_POMODOROS", // updates number of pomodoros make today
}

export const getTodayStatistics = (): ActionWithPayload<
  StatsActions,
  TodayStatistics
> => ({
  type: StatsActions.GET_TODAY_STATISTICS,
});

export const getTodayStatisticsSuccess = (
  payload: TodayStatistics
): ActionWithPayload<StatsActions, TodayStatistics> => ({
  type: StatsActions.GET_TODAY_STATISTICS_SUCCESS,
  payload,
});

export const getTodayStatisticsError = (
  error: any
): ActionWithPayload<StatsActions, Error> => ({
  type: StatsActions.GET_TODAY_STATISTICS_ERROR,
  payload: error,
});

export const incrementPomodoros = () => ({
  type: StatsActions.INCREMENT_POMODOROS,
});

// thunk

export const getTodayStats = () => (dispatch: Function) => {
  dispatch(getTodayStatistics());

  return fetch(initialConfig.apiUrl + "/stats/pomodoros_done_today")
    .then(handleErrors)
    .then((response) => response.json())
    .then((payload: TodayStatistics) => {
      return dispatch(getTodayStatisticsSuccess(payload));
    })
    .catch((error) => dispatch(getTodayStatisticsError(error)));
};
