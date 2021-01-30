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
    case StatsAction.GET_LAST_STATISTICS:
      return {
        ...state,
        isLoading: true,
      };
    case StatsAction.GET_LAST_STATISTICS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stats: action.payload,
      };
    case StatsAction.GET_LAST_STATISTICS_ERROR:
      return {
        ...state,
        error: 'something went wrong',
        isLoading: false,
      };
    default:
      return state;
  }
};
