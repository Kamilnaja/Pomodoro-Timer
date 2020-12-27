import { Action } from "../../../shared/store/interfaces/action.interface";
import { MainActions } from "../actions/actions";
import { MainReducer } from "../interfaces/mainReducer.interface";

export const initialState: MainReducer = {
  isLoading: false,
  error: "",
  quantity: 0,
};

export const main = (state = initialState, action: Action) => {
  switch (action.type) {
    case MainActions.SAVE_POMODORO:
      return {
        ...state,
        isLoading: true,
      };
    case MainActions.SAVE_POMODORO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case MainActions.SAVE_POMODORO_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case MainActions.GET_TODAY_STATISTICS:
      return {
        ...state,
        isLoading: true,
      };
    case MainActions.GET_TODAY_STATISTICS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case MainActions.GET_TODAY_STATISTICS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
