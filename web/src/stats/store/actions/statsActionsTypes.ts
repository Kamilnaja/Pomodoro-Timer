import { StatsSearchResult } from '../../../../../types/statsInterfaces';

export const GET_STATS = 'GET_STATS';
export const GET_STATS_SUCCESS = 'GET_STATS_SUCCESS';
export const GET_STATS_ERROR = 'GET_STATS_ERROR';

export const GET_TODAY_STATS = 'GET_TODAY_STATS';
export const GET_TODAY_STATS_SUCCESS = 'GET_TODAY_STATS_SUCCESS';
export const GET_TODAY_STATS_ERROR = 'GET_TODAY_STATS_ERROR';

export const SAVE_POMODORO = 'SAVE_POMODORO';
export const SAVE_POMODORO_SUCCESS = 'SAVE_POMODORO_SUCCESS';
export const SAVE_POMODORO_ERROR = 'SAVE_POMODORO_ERROR';

export const INCREMENT_MONTH = 'INCREMENT_MONTH';
export const DECREMENT_MONTH = 'DECREMENT_MONTH';

export const CLEAR_DATE = 'CLEAR_DATE';

export interface GetStatsAction {
  type: typeof GET_STATS;
}

export interface GetStatsSuccessAction {
  type: typeof GET_STATS_SUCCESS;
  payload: StatsSearchResult;
}

export interface GetStatsErrorAction {
  type: typeof GET_STATS_ERROR;
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

export interface IncrementMonth {
  type: typeof INCREMENT_MONTH;
  payload: number;
}

export interface DecrementMonth {
  type: typeof DECREMENT_MONTH;
  payload: number;
}

export interface ClearDate {
  type: typeof CLEAR_DATE;
}

export type StatsActionsTypes =
  | GetStatsAction
  | GetStatsSuccessAction
  | GetStatsErrorAction
  | GetTodayStatsAction
  | GetTodayStatsSuccessAction
  | GetTodayStatsErrorAction
  | SavePomodoroAction
  | SavePomodoroSuccessAction
  | SavePomodoroErrorAction
  | IncrementMonth
  | DecrementMonth
  | ClearDate;
