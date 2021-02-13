import { ActionWithPayload } from 'shared/store/interfaces/actions/actionInterface';
import StatsSearchResult from '../../../../../types/statisticsInterfaces';
import { StatsAction } from '../actions/statsActions';
import { StatsState } from '../models/StatsInterfaces';

export const initialState: StatsState = {
  isLoading: false,
  error: '',
  results: [],
  todayResults: 0,
};

export const statsReducer = (state = initialState, action: ActionWithPayload<StatsAction, StatsSearchResult>) => {
  switch (action.type) {
    case StatsAction.SAVE_POMODORO:
      return {
        ...state,
        isLoading: true,
      };
    case StatsAction.SAVE_POMODORO_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case StatsAction.SAVE_POMODORO_ERROR:
      return {
        ...state,
        error: 'todo handle error',
        isLoading: false,
      };
    case StatsAction.GET_STATISTIC_IN_PERIOD:
      return {
        ...state,
        isLoading: true,
      };
    case StatsAction.GET_STATISTIC_IN_PERIOD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        results: action.payload.result,
      };
    case StatsAction.GET_STATISTIC_IN_PERIOD_ERROR:
      return {
        ...state,
        error: 'something went wrong',
        isLoading: false,
      };
    case StatsAction.GET_TODAY_STATS:
      return {
        ...state,
        isLoading: true,
      };
    case StatsAction.GET_TODAY_STATS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: 'something wrong',
      };
    case StatsAction.GET_TODAY_STATS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todayResults: action.payload,
      };
    default:
      return state;
  }
};
