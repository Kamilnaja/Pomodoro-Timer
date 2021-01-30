import { Action } from 'redux';
import { MainAction } from '../actions/main.actions';
import { MainState } from '../interfaces/mainState.interface';

const initialState: MainState = {
  isLoading: false,
  error: '',
  isLoggedIn: false,
};

export const mainReducer = (state = initialState, action: Action<MainAction>) => {
  switch (action.type) {
    case MainAction.SAVE_POMODORO:
      return {
        ...state,
        isLoading: true,
      };
    case MainAction.SAVE_POMODORO_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case MainAction.SAVE_POMODORO_ERROR:
      return {
        ...state,
        error: 'todo handle error',
        isLoading: false,
      };
    default:
      return state;
  }
};
