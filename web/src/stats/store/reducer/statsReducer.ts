import { ActionWithPayload } from 'shared/store/interfaces/actions/actionInterface';
import StatsSearchResult from '../../../../../types/statistics.interfaces';
import { StatsAction } from '../actions/stats.actions';
import { StatsState } from '../interfaces/stats.interfaces';

export const initialState: StatsState = {
  isLoading: false,
  error: '',
  results: [],
};

export const statsReducer = (state = initialState, action: ActionWithPayload<StatsAction, StatsSearchResult>) => {
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
        results: action.payload.result,
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
