import { Action } from 'redux';
import { StatsSearchResult, StatsWithTagsSearchResult } from '../../../../../types/statisticsInterfaces';
import { fetchData, updateData } from '../../../shared/scripts/requests';
import { getCurrentDay, getCurrentMonth, getCurrentYear } from '../../../shared/scripts/utils';
import {
  GET_STATISTIC_IN_PERIOD,
  GET_STATISTIC_IN_PERIOD_ERROR,
  GET_STATISTIC_IN_PERIOD_SUCCESS,
  GET_STATISTIC_WITH_TAGS_IN_PERIOD,
  GET_STATISTIC_WITH_TAGS_IN_PERIOD_ERROR,
  GET_STATISTIC_WITH_TAGS_IN_PERIOD_SUCCESS,
  GET_TODAY_STATS,
  GET_TODAY_STATS_ERROR,
  GET_TODAY_STATS_SUCCESS,
  SAVE_POMODORO,
  SAVE_POMODORO_ERROR,
  StatsActionsTypes,
} from './statsActionsTypes';

const savePomodoro = (): StatsActionsTypes => ({
  type: SAVE_POMODORO,
});

const savePomodoroError = (error: any): StatsActionsTypes => ({
  type: SAVE_POMODORO_ERROR,
  payload: error,
});

const getStatisticsInPeriod = (): Action => ({
  type: GET_STATISTIC_IN_PERIOD,
});

const getStatisticsInPeriodSuccess = (payload: StatsSearchResult): StatsActionsTypes => ({
  type: GET_STATISTIC_IN_PERIOD_SUCCESS,
  payload,
});

const getStatisticsInPeriodError = (payload: StatsSearchResult): StatsActionsTypes => ({
  type: GET_STATISTIC_IN_PERIOD_ERROR,
  payload,
});

const getTodayStats = (): StatsActionsTypes => ({
  type: GET_TODAY_STATS,
});

const getTodayStatsSuccess = (payload: number): StatsActionsTypes => ({
  type: GET_TODAY_STATS_SUCCESS,
  payload,
});

const getTodayStatsError = (payload: any): StatsActionsTypes => ({
  type: GET_TODAY_STATS_ERROR,
  payload,
});

const getStatisticsWithTagsInPeriod = () => ({
  type: GET_STATISTIC_WITH_TAGS_IN_PERIOD,
});

const getStatisticsWithTagsInPeriodSuccess = (payload: StatsWithTagsSearchResult) => ({
  type: GET_STATISTIC_WITH_TAGS_IN_PERIOD_SUCCESS,
  payload,
});

const getStatisticsWithTagsInPeriodError = (payload: any) => ({
  type: GET_STATISTIC_WITH_TAGS_IN_PERIOD_ERROR,
  payload,
});
// thunk

export const handleGetStatsWithTagsInPeriod = (year: number, month: number) => async (
  dispatch: (args: Action) => void,
) => {
  dispatch(getStatisticsWithTagsInPeriod());

  fetchData(`stats/tags/${year}/${month}`)
    .then((payload: StatsWithTagsSearchResult) => dispatch(getStatisticsWithTagsInPeriodSuccess(payload)))
    .catch(err => dispatch(getStatisticsWithTagsInPeriodError(err)));
};

export const handleGetStatsInPeriod = (year: number, month: number) => async (dispatch: (args: Action) => void) => {
  dispatch(getStatisticsInPeriod());

  fetchData(`stats/${year}/${month}`)
    .then((payload: StatsSearchResult) => dispatch(getStatisticsInPeriodSuccess(payload)))
    .catch(err => dispatch(getStatisticsInPeriodError(err)));
};

export const handleGetTodayStats = () => async (dispatch: (args: Action) => void) => {
  dispatch(getTodayStats());

  fetchData(`stats/${getCurrentYear()}/${getCurrentMonth()}/${getCurrentDay()}`)
    .then((payload: StatsSearchResult) =>
      dispatch(getTodayStatsSuccess(payload.pomodoros[0] ? payload.pomodoros[0].count : 0)),
    )
    .catch(err => dispatch(getTodayStatsError(err)));
};

export const handleSavePomodoro = () => async (dispatch: (arg: Action | any) => void) => {
  dispatch(savePomodoro());
  updateData('stats', {}, 'POST')
    .then(() => dispatch(handleGetTodayStats()))
    .catch(err => dispatch(savePomodoroError(err)));
};
