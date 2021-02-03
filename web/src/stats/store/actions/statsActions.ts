import { Action } from 'redux';
import { config } from 'shared/settings/initialConfig';
import { ActionWithPayload } from 'shared/store/interfaces/actions/actionInterface';
import { store } from 'shared/store/reducers/reducer';
import StatsSearchResult from '../../../../../types/statistics.interfaces';

export enum StatsAction {
  GET_STATISTIC_IN_PERIOD = 'GET_STATISTIC_IN_PERIOD',
  GET_STATISTIC_IN_PERIOD_SUCCESS = 'GET_STATISTIC_IN_PERIOD_SUCCESS',
  GET_STATISTIC_IN_PERIOD_ERROR = 'GET_STATISTIC_IN_PERIOD_ERROR',
}

export const getStatisticsInPeriod = (): Action => ({
  type: StatsAction.GET_STATISTIC_IN_PERIOD,
});

export const getStatisticsInPeriodSuccess = (
  payload: StatsSearchResult,
): ActionWithPayload<StatsAction, StatsSearchResult> => ({
  type: StatsAction.GET_STATISTIC_IN_PERIOD_SUCCESS,
  payload,
});

export const getStatisticsInPeriodError = (
  payload: StatsSearchResult,
): ActionWithPayload<StatsAction, StatsSearchResult> => ({
  type: StatsAction.GET_STATISTIC_IN_PERIOD_ERROR,
  payload,
});

// thunk

export const getStatsInPeriod = (year: number, month: number) => async (dispatch: (args: Action) => void) => {
  dispatch(getStatisticsInPeriod());

  makeGetStatsRequest(year, month)
    .then((payload: StatsSearchResult) => dispatch(getStatisticsInPeriodSuccess(payload)))
    .catch(err => dispatch(getStatisticsInPeriodError(err)));
};

export const makeGetStatsRequest = async (year: number, month: number) => {
  const token = store.getState().auth.token;

  const response = await fetch(`${config.url.API_URL}/stats/${year}/${month}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const responseBody = await response.json();

  return response.ok ? Promise.resolve(responseBody) : Promise.reject(responseBody);
};
