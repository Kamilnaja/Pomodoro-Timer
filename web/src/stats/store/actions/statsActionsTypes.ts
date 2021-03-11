import { StatsSearchResult, PomodorosSearchResult } from '../../../../../types/statsInterfaces';
import { Tag } from '../../../../../types/tagsInterfaces';

export const GET_STATS = 'GET_STATS';
export const GET_STATS_SUCCESS = 'GET_STATS_SUCCESS';
export const GET_STATS_ERROR = 'GET_STATS_ERROR';

export const GET_STATS_WITH_TAGS = 'GET_STATS_WITH_TAGS';
export const GET_STATS_WITH_TAGS_SUCCESS = 'GET_STATS_WITH_TAGS_SUCCESS';
export const GET_STATS_WITH_TAGS_ERROR = 'GET_STATS_WITH_TAGS_ERROR';

export const GET_TODAY_STATS = 'GET_TODAY_STATS';
export const GET_TODAY_STATS_SUCCESS = 'GET_TODAY_STATS_SUCCESS';
export const GET_TODAY_STATS_ERROR = 'GET_TODAY_STATS_ERROR';

export const SAVE_POMODORO = 'SAVE_POMODORO';
export const SAVE_POMODORO_SUCCESS = 'SAVE_POMODORO_SUCCESS';
export const SAVE_POMODORO_ERROR = 'SAVE_POMODORO_ERROR';

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

export interface GetStatsWithTagsAction {
  type: typeof GET_STATS_WITH_TAGS;
}

export interface GetStatsWithTagsSuccessAction {
  type: typeof GET_STATS_WITH_TAGS_SUCCESS;
  payload: PomodorosSearchResult;
}

export interface GetStatsWithTagsErrorAction {
  type: typeof GET_STATS_WITH_TAGS_ERROR;
  payload: any;
}

export type StatsActionsTypes =
  | GetStatsAction
  | GetStatsSuccessAction
  | GetStatsErrorAction
  | GetStatsWithTagsAction
  | GetStatsWithTagsSuccessAction
  | GetStatsWithTagsErrorAction
  | GetTodayStatsAction
  | GetTodayStatsSuccessAction
  | GetTodayStatsErrorAction
  | SavePomodoroAction
  | SavePomodoroSuccessAction
  | SavePomodoroErrorAction;
