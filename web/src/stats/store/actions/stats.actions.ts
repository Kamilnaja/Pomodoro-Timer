import { Action } from "redux";
import { config } from "shared/settings/initialConfig";
import { ActionWithPayload } from "shared/store/interfaces/actions/action.interface";
import { store } from "shared/store/reducers/reducer";
import { AuthError } from "../../../../../types/interfaces";
import StatsSearchResult from "../../../../../types/statistics.interfaces";

export enum StatsAction {
  GET_LAST_STATISTICS = "GET_LAST_STATISTICS",
  GET_LAST_STATISTICS_SUCCESS = "GET_LAST_STATISTICS_SUCCESS",
  GET_LAST_STATISTICS_ERROR = "GET_LAST_STATISTICS_ERROR",
}

export const getLastStatistics = (payload: number): ActionWithPayload<StatsAction, number> => ({
  type: StatsAction.GET_LAST_STATISTICS,
  payload,
});

export const getLastStatisticsSuccess = (payload: StatsSearchResult): ActionWithPayload<StatsAction, StatsSearchResult> => ({
  type: StatsAction.GET_LAST_STATISTICS_SUCCESS,
  payload,
});

export const getLastStatisticsError = (error: AuthError): ActionWithPayload<StatsAction, AuthError> => ({
  type: StatsAction.GET_LAST_STATISTICS_ERROR,
  payload: error,
});
// thunk

export const getLastStats = (duration: number) => async (dispatch: (args: Action) => void) => {
  dispatch(getLastStatistics(duration));

  makeGetStatsRequest()
    .then((payload: StatsSearchResult) => {
      dispatch(getLastStatisticsSuccess(payload));
    })
    .catch(err => {
      dispatch(getLastStatisticsError(err));
    });
};

export const makeGetStatsRequest = async () => {
  const token = store.getState().auth.token;

  const response = await fetch(`${config.url.API_URL}/stats`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const responseBody = await response.json();

  return response.ok ? Promise.resolve(responseBody) : Promise.reject(responseBody);
};
