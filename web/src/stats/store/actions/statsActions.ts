import { Action } from 'redux';
import { ActionWithPayload } from 'store/interfaces/actions/actionInterface';
import StatsSearchResult from '../../../../../types/statisticsInterfaces';
import { fetchData, updateData } from '../../../shared/scripts/requests';
import { getCurrentDay, getCurrentMonth, getCurrentYear } from '../../../shared/scripts/utils';
import {
  SAVE_POMODORO,
  SAVE_POMODORO_ERROR,
  GET_STATISTIC_IN_PERIOD,
  GET_STATISTIC_IN_PERIOD_SUCCESS,
  GET_STATISTIC_IN_PERIOD_ERROR,
  GET_TODAY_STATS,
  GET_TODAY_STATS_SUCCESS,
  GET_TODAY_STATS_ERROR,
} from './statsActionsTypes';

const savePomodoro = (): Action<string> => ({
  type: SAVE_POMODORO,
});

const savePomodoroError = (error: any): ActionWithPayload<string, any> => ({
  type: SAVE_POMODORO_ERROR,
  payload: error,
});

const getStatisticsInPeriod = (): Action => ({
  type: GET_STATISTIC_IN_PERIOD,
});

const getStatisticsInPeriodSuccess = (payload: StatsSearchResult): ActionWithPayload<string, StatsSearchResult> => ({
  type: GET_STATISTIC_IN_PERIOD_SUCCESS,
  payload,
});

const getStatisticsInPeriodError = (payload: StatsSearchResult): ActionWithPayload<string, StatsSearchResult> => ({
  type: GET_STATISTIC_IN_PERIOD_ERROR,
  payload,
});

const getTodayStats = (): Action => ({
  type: GET_TODAY_STATS,
});

const getTodayStatsSuccess = (payload: number): ActionWithPayload<string, number> => ({
  type: GET_TODAY_STATS_SUCCESS,
  payload,
});

const getTodayStatsError = (payload: any): ActionWithPayload<string, any> => ({
  type: GET_TODAY_STATS_ERROR,
  payload,
});

// thunk

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
      dispatch(getTodayStatsSuccess(payload.result[0] ? payload.result[0].count : 0)),
    )
    .catch(err => dispatch(getTodayStatsError(err)));
};

export const handleSavePomodoro = () => async (dispatch: (arg: Action | any) => void) => {
  dispatch(savePomodoro());
  updateData('stats', {}, 'POST')
    .then(() => dispatch(handleGetTodayStats()))
    .catch(err => dispatch(savePomodoroError(err)));
};
