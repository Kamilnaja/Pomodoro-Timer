import { initialConfig } from '../../../shared/settings/initialConfig';
import {
  END,
  PAUSE,
  PomodoroCounterActionsTypes,
  RUN,
  SET_MODE_BREAK,
  SET_MODE_POMODORO,
  UPDATE_TIME,
} from '../actions/pomodoroCounterActionTypes';
import { CounterState } from '../enums/CounterState';
import { CurrentTimer, PomodoroCounterState } from '../interfaces/PomodoroCounterState';

export const timerState: PomodoroCounterState = {
  counterState: CounterState.END,
  counterTime: initialConfig.pomodoroTime,
  currentTimer: CurrentTimer.POMODORO,
};

export const pomodoroCounterReducer = (
  state: PomodoroCounterState = timerState,
  action: PomodoroCounterActionsTypes,
): PomodoroCounterState => {
  switch (action.type) {
    case RUN:
      return {
        ...state,
        counterState: CounterState.RUNNING,
      };
    case PAUSE:
      return {
        ...state,
        counterState: CounterState.PAUSE,
      };
    case END:
      return {
        ...state,
        counterState: CounterState.END,
      };
    case UPDATE_TIME:
      return {
        ...state,
        counterTime: action.payload,
      };
    case SET_MODE_POMODORO:
      return {
        ...state,
        currentTimer: CurrentTimer.POMODORO,
        counterTime: initialConfig.pomodoroTime,
      };
    case SET_MODE_BREAK:
      return {
        ...state,
        currentTimer: CurrentTimer.SHORT_BREAK,
        counterTime: action.payload,
      };
    default:
      return state;
  }
};
