import { Action } from "../../../shared/store/interfaces/action.interface";
import { MainActions } from "../actions/actions";
import { Reducer } from "../interfaces/reducer.interface";

export const initialState: Reducer = {
  isLoading: false,
  error: "",
  pomodoros: [],
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

    case MainActions.GET_POMODOROS:
      return {
        ...state,
        isLoading: true,
      };
    case MainActions.GET_POMODOROS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case MainActions.GET_POMODOROS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
