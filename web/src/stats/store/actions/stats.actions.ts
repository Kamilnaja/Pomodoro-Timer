import { Action } from "redux";
import { Error } from "../../../../../types/interfaces";
import { handleErrors } from "../../../shared/scripts/utils";
import { config } from "../../../shared/settings/initialConfig";
import { ActionWithPayload } from "../../../shared/store/interfaces/actions/action.interface";
import TodayStatistics from "./../../../shared/store/interfaces/todayStatistics.interface";

export enum StatsAction {
  GET_TODAY_STATISTICS = "GET_TODAY_STATISTICS",
  GET_TODAY_STATISTICS_SUCCESS = "GET_TODAY_STATISTICS_SUCCESS",
  GET_TODAY_STATISTICS_ERROR = "GET_TODAY_STATISTICS_ERROR",
  INCREMENT_POMODOROS = "INCREMENT_POMODOROS", // updates number of pomodoros make today
}

export const getTodayStatistics = (): Action<StatsAction> => ({
  type: StatsAction.GET_TODAY_STATISTICS,
});

export const getTodayStatisticsSuccess = (payload: TodayStatistics): ActionWithPayload<StatsAction, TodayStatistics> => ({
  type: StatsAction.GET_TODAY_STATISTICS_SUCCESS,
  payload,
});

export const getTodayStatisticsError = (error: any): ActionWithPayload<StatsAction, Error> => ({
  type: StatsAction.GET_TODAY_STATISTICS_ERROR,
  payload: error,
});

export const incrementPomodoros = (): Action<StatsAction> => ({
  type: StatsAction.INCREMENT_POMODOROS,
});

// thunk

export const getTodayStats = () => (dispatch: (arg: Action) => void) => {
  dispatch(getTodayStatistics());

  return fetch(config.url.API_URL + "/stats/pomodoros_done_today")
    .then(handleErrors)
    .then(response => response.json())
    .then((payload: TodayStatistics) => {
      return dispatch(getTodayStatisticsSuccess(payload));
    })
    .catch(error => dispatch(getTodayStatisticsError(error)));
};
