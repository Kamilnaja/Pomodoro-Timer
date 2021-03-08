import { Action } from 'redux';
import { StatsSearchResult, StatsWithTagsSearchResult } from '../../../../../types/statsInterfaces';
import { fetchData, updateData } from '../../../shared/scripts/requests';
import { getCurrentDay, getCurrentMonth, getCurrentYear } from '../../../shared/scripts/utils';
import {
  GET_STATS,
  GET_STATS_ERROR,
  GET_STATS_SUCCESS,
  GET_STATS_WITH_TAGS,
  GET_STATS_WITH_TAGS_ERROR,
  GET_STATS_WITH_TAGS_SUCCESS,
  GET_TODAY_STATS,
  GET_TODAY_STATS_ERROR,
  GET_TODAY_STATS_SUCCESS,
  SAVE_POMODORO,
  SAVE_POMODORO_ERROR,
  StatsActionsTypes,
} from './statsActionsTypes';

export const savePomodoro = (): StatsActionsTypes => ({
  type: SAVE_POMODORO,
});

const savePomodoroError = (error: any): StatsActionsTypes => ({
  type: SAVE_POMODORO_ERROR,
  payload: error,
});

const getStatsInPeriod = (): Action => ({
  type: GET_STATS,
});

const getStatsInPeriodSuccess = (payload: StatsSearchResult): StatsActionsTypes => ({
  type: GET_STATS_SUCCESS,
  payload,
});

const getStatsInPeriodError = (payload: StatsSearchResult): StatsActionsTypes => ({
  type: GET_STATS_ERROR,
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

const getStatsWithTagsInPeriod = () => ({
  type: GET_STATS_WITH_TAGS,
});

const getStatsWithTagsInPeriodSuccess = (payload: StatsWithTagsSearchResult) => ({
  type: GET_STATS_WITH_TAGS_SUCCESS,
  payload,
});

const getStatsWithTagsInPeriodError = (payload: any) => ({
  type: GET_STATS_WITH_TAGS_ERROR,
  payload,
});
// thunk

export const handleGetStatsWithTagsInPeriod = (year: number, month: number) => async (
  dispatch: (args: Action) => void,
) => {
  dispatch(getStatsWithTagsInPeriod());

  fetchData(`stats/tags/${year}/${month}`)
    .then((payload: StatsWithTagsSearchResult) => dispatch(getStatsWithTagsInPeriodSuccess(payload)))
    .catch(err => dispatch(getStatsWithTagsInPeriodError(err)));
};

export const handleGetStatsInPeriod = (year: number, month: number) => async (dispatch: (args: Action) => void) => {
  dispatch(getStatsInPeriod());

  fetchData(`stats/${year}/${month}`)
    .then((payload: StatsSearchResult) => dispatch(getStatsInPeriodSuccess(payload)))
    .catch(err => dispatch(getStatsInPeriodError(err)));
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
