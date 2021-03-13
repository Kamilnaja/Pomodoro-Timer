import { HIDE_ERROR, SET_ERROR } from '../actions/errorActionsTypes';
import { ErrorActionsTypes } from '../actions/errorActionsTypes';

export interface ErrorState {
  error: string;
  isOpened: boolean;
}

export const errorInitialState: ErrorState = {
  error: '',
  isOpened: false,
};

export const errorReducer = (state = errorInitialState, action: ErrorActionsTypes): ErrorState => {
  switch (action.type) {
    case SET_ERROR:
      return {
        error: action.error,
        isOpened: true,
      };
    case HIDE_ERROR:
      return {
        error: '',
        isOpened: false,
      };
    default:
      return state;
  }
};
