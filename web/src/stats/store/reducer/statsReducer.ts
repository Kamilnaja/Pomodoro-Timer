import * as fromActions from '../actions/statsActionsTypes';
import { StatsState } from '../models/StatsInterfaces';

export const initialState: StatsState = {
  isLoading: false,
  error: '',
  stats: null,
  todayResults: 0,
};

export const statsReducer = (state = initialState, action: fromActions.StatsActionsTypes) => {
  switch (action.type) {
    case fromActions.SAVE_POMODORO:
      return {
        ...state,
        isLoading: true,
      };
    case fromActions.SAVE_POMODORO_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case fromActions.SAVE_POMODORO_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case fromActions.GET_STATS:
      return {
        ...state,
        isLoading: true,
      };
    case fromActions.GET_STATS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stats: action.payload,
      };
    case fromActions.GET_STATS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case fromActions.GET_TODAY_STATS:
      return {
        ...state,
        isLoading: true,
      };
    case fromActions.GET_TODAY_STATS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case fromActions.GET_TODAY_STATS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todayResults: action.payload,
      };
    default:
      return state;
  }
};
