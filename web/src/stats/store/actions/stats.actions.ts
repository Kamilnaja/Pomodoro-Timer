import { Action } from "redux";
import { handleErrors } from "shared/scripts/utils";
import { config } from "shared/settings/initialConfig";
import { ActionWithPayload } from "shared/store/interfaces/actions/action.interface";
import { store } from "shared/store/reducers/reducer";
import { AuthError } from "../../../../../types/interfaces";
import StatsSearchResult from "../../../../../types/statistics.interfaces";

export enum StatsAction {
  GET_TODAY_STATISTICS = "GET_TODAY_STATISTICS",
  GET_TODAY_STATISTICS_SUCCESS = "GET_TODAY_STATISTICS_SUCCESS",
  GET_TODAY_STATISTICS_ERROR = "GET_TODAY_STATISTICS_ERROR",
  INCREMENT_POMODOROS = "INCREMENT_POMODOROS", // updates number of pomodoros make today
}

export const getTodayStatistics = (): Action<StatsAction> => ({
  type: StatsAction.GET_TODAY_STATISTICS,
});

export const getTodayStatisticsSuccess = (payload: number): ActionWithPayload<StatsAction, number> => ({
  type: StatsAction.GET_TODAY_STATISTICS_SUCCESS,
  payload,
});

export const getTodayStatisticsError = (error: AuthError): ActionWithPayload<StatsAction, AuthError> => ({
  type: StatsAction.GET_TODAY_STATISTICS_ERROR,
  payload: error,
});

export const incrementPomodoros = (): Action<StatsAction> => ({
  type: StatsAction.INCREMENT_POMODOROS,
});

// thunk
export const getTodayStats = () => (dispatch: (arg: Action) => void) => {
  dispatch(getTodayStatistics());

  const token = store.getState().auth.token;

  return fetch(`${config.url.API_URL}/stats`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then(handleErrors)
    .then(response => response.json())
    .then((payload: StatsSearchResult) => {
      return dispatch(getTodayStatisticsSuccess(payload.result[0].count));
    })
    .catch(error => dispatch(getTodayStatisticsError(error)));
};
