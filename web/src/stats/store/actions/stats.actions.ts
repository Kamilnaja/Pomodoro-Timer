import { Action } from 'redux';
import { config } from 'shared/settings/initialConfig';
import { ActionWithPayload } from 'shared/store/interfaces/actions/action.interface';
import { store } from 'shared/store/reducers/reducer';
import StatsSearchResult from '../../../../../types/statistics.interfaces';

export enum StatsAction {
  GET_STATISTIC_IN_PERIOD = 'GET_STATISTIC_IN_PERIOD',
  GET_STATISTIC_IN_PERIOD_SUCCESS = 'GET_STATISTIC_IN_PERIOD_SUCCESS',
  GET_STATISTIC_IN_PERIOD_ERROR = 'GET_STATISTIC_IN_PERIOD_ERROR',
}

export const getStatisticsInPeriod = (payload: string): ActionWithPayload<StatsAction, string> => ({
  type: StatsAction.GET_STATISTIC_IN_PERIOD,
  payload,
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

export const getStatsInPeriod = (date: string) => async (dispatch: (args: Action) => void) => {
  dispatch(getStatisticsInPeriod(date));

  makeGetStatsRequest(date)
    .then((payload: StatsSearchResult) => dispatch(getStatisticsInPeriodSuccess(payload)))
    .catch(err => dispatch(getStatisticsInPeriodError(err)));
};

export const makeGetStatsRequest = async (date: string) => {
  const token = store.getState().auth.token;

  const response = await fetch(`${config.url.API_URL}/stats/${date}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const responseBody = await response.json();

  return response.ok ? Promise.resolve(responseBody) : Promise.reject(responseBody);
};
