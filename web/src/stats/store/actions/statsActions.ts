import { Action } from 'redux';
import { ActionWithPayload } from 'shared/store/interfaces/actions/actionInterface';
import StatsSearchResult, { SearchDate, TodayStatsResult } from '../../../../../types/statisticsInterfaces';
import { fetchData } from '../../../shared/scripts/requests';

export enum StatsAction {
  GET_STATISTIC_IN_PERIOD = 'GET_STATISTIC_IN_PERIOD',
  GET_STATISTIC_IN_PERIOD_SUCCESS = 'GET_STATISTIC_IN_PERIOD_SUCCESS',
  GET_STATISTIC_IN_PERIOD_ERROR = 'GET_STATISTIC_IN_PERIOD_ERROR',

  GET_TODAY_STATS = 'Get today stats',
  GET_TODAY_STATS_SUCCESS = 'Get today stats success',
  GET_TODAY_STATS_ERROR = 'Get today stats error',
}

const getStatisticsInPeriod = (): Action => ({
  type: StatsAction.GET_STATISTIC_IN_PERIOD,
});

const getStatisticsInPeriodSuccess = (
  payload: StatsSearchResult,
): ActionWithPayload<StatsAction, StatsSearchResult> => ({
  type: StatsAction.GET_STATISTIC_IN_PERIOD_SUCCESS,
  payload,
});

const getStatisticsInPeriodError = (payload: StatsSearchResult): ActionWithPayload<StatsAction, StatsSearchResult> => ({
  type: StatsAction.GET_STATISTIC_IN_PERIOD_ERROR,
  payload,
});

const getTodayStats = (): Action => ({
  type: StatsAction.GET_TODAY_STATS,
});

const getTodayStatsSuccess = (payload: TodayStatsResult): ActionWithPayload<StatsAction, TodayStatsResult> => ({
  type: StatsAction.GET_TODAY_STATS_SUCCESS,
  payload,
});

const getTodayStatsError = (payload: any): ActionWithPayload<StatsAction, any> => ({
  type: StatsAction.GET_TODAY_STATS_ERROR,
  payload,
});

// thunk

export const handleGetStatsInPeriod = (year: number, month: number) => async (dispatch: (args: Action) => void) => {
  dispatch(getStatisticsInPeriod());

  fetchData(`/stats/${year}/${month}`)
    .then((payload: StatsSearchResult) => dispatch(getStatisticsInPeriodSuccess(payload)))
    .catch(err => dispatch(getStatisticsInPeriodError(err)));
};

export const handleGetTodayStats = (searchDate: SearchDate) => async (dispatch: (args: Action) => void) => {
  dispatch(getTodayStats());

  const { year, month, day } = searchDate;

  fetchData(`/stats/${year}/${month}/${day}`)
    .then((payload: TodayStatsResult) => dispatch(getTodayStatsSuccess(payload)))
    .catch(err => dispatch(getTodayStatsError(err)));
};
