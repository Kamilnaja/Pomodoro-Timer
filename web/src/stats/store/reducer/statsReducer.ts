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
  SAVE_POMODORO_SUCCESS,
  StatsActionsTypes,
} from '../actions/statsActionsTypes';
import { StatsState } from '../models/StatsInterfaces';

export const initialState: StatsState = {
  isLoading: false,
  error: '',
  stats: null,
  todayResults: 0,
};

export const statsReducer = (state = initialState, action: StatsActionsTypes) => {
  switch (action.type) {
    case SAVE_POMODORO:
      return {
        ...state,
        isLoading: true,
      };
    case SAVE_POMODORO_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case SAVE_POMODORO_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case GET_STATS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_STATS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stats: action.payload,
      };
    case GET_STATS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case GET_STATS_WITH_TAGS:
      return {
        ...state,
      };
    case GET_STATS_WITH_TAGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_STATS_WITH_TAGS_SUCCESS:
      return {
        ...state,
        statsWithTags: action.payload,
      };
    case GET_TODAY_STATS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODAY_STATS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_TODAY_STATS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todayResults: action.payload,
      };
    default:
      return state;
  }
};
