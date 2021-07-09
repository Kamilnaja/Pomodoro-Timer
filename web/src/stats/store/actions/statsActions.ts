import { Action } from 'redux';
import { StatsSearchResult } from '../../../../../types/statsInterfaces';
import { Tag } from '../../../../../types/tagsInterfaces';
import { fetchData, updateData } from '../../../shared/scripts/requests';
import { getCurrentDay, getCurrentMonth, getCurrentYear } from '../../../shared/scripts/utils';
import {
  GET_STATS,
  GET_STATS_ERROR,
  GET_STATS_SUCCESS,
  GET_STATS_WITH_TAGS_ERROR,
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

const getStats = (): Action => ({
  type: GET_STATS,
});

const getStatsSuccess = (payload: StatsSearchResult): StatsActionsTypes => ({
  type: GET_STATS_SUCCESS,
  payload,
});

const getStatsError = (payload: StatsSearchResult): StatsActionsTypes => ({
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

export const getStatsWithTagsError = (payload: any) => ({
  type: GET_STATS_WITH_TAGS_ERROR,
  payload,
});
// thunk

export const handleGetStats = (year: number, month: number) => async (dispatch: (args: Action) => void) => {
  dispatch(getStats());

  fetchData(`stats/${year}/${month}`)
    .then((payload: StatsSearchResult) => dispatch(getStatsSuccess(payload)))
    .catch(err => dispatch(getStatsError(err)));
};

export const handleGetTodayStats = () => async (dispatch: (args: StatsActionsTypes) => void) => {
  dispatch(getTodayStats());

  return fetchData(`stats/${getCurrentYear()}/${getCurrentMonth()}/${getCurrentDay()}`)
    .then((payload: StatsSearchResult) =>
      dispatch(getTodayStatsSuccess(payload.pomodoros[0] ? payload.pomodoros[0].count : 0)),
    )
    .catch(err => dispatch(getTodayStatsError(err)));
};

export const handleSavePomodoro = (tag: Tag) => async (dispatch: (arg: StatsActionsTypes | any) => void) => {
  dispatch(savePomodoro());

  updateData('stats', tag, 'POST')
    .then(() => dispatch(handleGetTodayStats()))
    .catch(err => dispatch(savePomodoroError(err)));
};
