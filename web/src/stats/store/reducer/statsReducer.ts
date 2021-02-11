import { ActionWithPayload } from 'shared/store/interfaces/actions/actionInterface';
import StatsSearchResult from '../../../../../types/statisticsInterfaces';
import { StatsState } from '../../containers/statsContainerInterfaces';
import { StatsAction } from '../actions/statsActions';

export const initialState: StatsState = {
  isLoading: false,
  error: '',
  results: [],
  todayResults: 0,
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
    case StatsAction.GET_TODAY_STATS:
      return {
        ...state,
        isLoading: true,
      };
    case StatsAction.GET_TODAY_STATS_ERROR:
      return {
        ...state,
        error: 'something wrong',
      };
    case StatsAction.GET_TODAY_STATS_SUCCESS:
      return {
        ...state,
        isLoading: true,
        todayResults: action.payload.result,
      };
    default:
      return state;
  }
};
