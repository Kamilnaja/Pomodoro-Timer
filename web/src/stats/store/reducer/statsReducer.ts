import {
  GET_STATISTIC_IN_PERIOD,
  GET_STATISTIC_IN_PERIOD_ERROR,
  GET_STATISTIC_IN_PERIOD_SUCCESS,
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
  results: null,
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
    case GET_STATISTIC_IN_PERIOD:
      return {
        ...state,
        isLoading: true,
      };
    case GET_STATISTIC_IN_PERIOD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        results: action.payload,
      };
    case GET_STATISTIC_IN_PERIOD_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
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
