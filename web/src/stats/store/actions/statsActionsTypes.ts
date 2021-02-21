import { StatsSearchResult } from '../../../../../types/statisticsInterfaces';

export const GET_STATISTIC_IN_PERIOD = 'GET_STATISTIC_IN_PERIOD';
export const GET_STATISTIC_IN_PERIOD_SUCCESS = 'GET_STATISTIC_IN_PERIOD_SUCCESS';
export const GET_STATISTIC_IN_PERIOD_ERROR = 'GET_STATISTIC_IN_PERIOD_ERROR';

export const GET_TODAY_STATS = 'GET_TODAY_STATS';
export const GET_TODAY_STATS_SUCCESS = 'GET_TODAY_STATS_SUCCESS';
export const GET_TODAY_STATS_ERROR = 'GET_TODAY_STATS_ERROR';

export const SAVE_POMODORO = 'SAVE_POMODORO';
export const SAVE_POMODORO_SUCCESS = 'SAVE_POMODORO_SUCCESS';
export const SAVE_POMODORO_ERROR = 'SAVE_POMODORO_ERROR';

export interface GetStatisticsInPeriodAction {
  type: typeof GET_STATISTIC_IN_PERIOD;
}

export interface GetStatisticsInPeriodSuccessAction {
  type: typeof GET_STATISTIC_IN_PERIOD_SUCCESS;
  payload: StatsSearchResult;
}

export interface GetStatisticsInPeriodErrorAction {
  type: typeof GET_STATISTIC_IN_PERIOD_ERROR;
  payload: any;
}

export interface GetTodayStatsAction {
  type: typeof GET_TODAY_STATS;
}

export interface GetTodayStatsSuccessAction {
  type: typeof GET_TODAY_STATS_SUCCESS;
  payload: number;
}

export interface GetTodayStatsErrorAction {
  type: typeof GET_TODAY_STATS_ERROR;
  payload: any;
}

export interface SavePomodoroAction {
  type: typeof SAVE_POMODORO;
}

export interface SavePomodoroSuccessAction {
  type: typeof SAVE_POMODORO_SUCCESS;
}

export interface SavePomodoroErrorAction {
  type: typeof SAVE_POMODORO_ERROR;
  payload: any;
}

export type StatsActionsTypes =
  | GetStatisticsInPeriodAction
  | GetStatisticsInPeriodSuccessAction
  | GetStatisticsInPeriodErrorAction
  | GetTodayStatsAction
  | GetTodayStatsSuccessAction
  | GetTodayStatsErrorAction
  | SavePomodoroAction
  | SavePomodoroSuccessAction
  | SavePomodoroErrorAction;
