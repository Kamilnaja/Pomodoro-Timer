import { ActionWithPayload } from 'shared/store/interfaces/actions/action.interface';
import TodayStatistics from '../../../../../types/statistics.interfaces';
import { StatsAction } from '../actions/stats.actions';

export const initialState = {
  isLoading: false,
  error: '',
  stats: null as any,
};

export const statsReducer = (state = initialState, action: ActionWithPayload<StatsAction, TodayStatistics>) => {
  switch (action.type) {
    case StatsAction.GET_STATISTIC_IN_PERIOD:
      return {
        ...state,
        isLoading: true,
      };
    case StatsAction.GET_STATISTIC_IN_PERIOD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stats: action.payload,
      };
    case StatsAction.GET_STATISTIC_IN_PERIOD_ERROR:
      return {
        ...state,
        error: 'something went wrong',
        isLoading: false,
      };
    default:
      return state;
  }
};
