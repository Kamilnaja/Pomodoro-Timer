import { initialConfig } from '../../../shared/settings/initialConfig';
import { ActionWithPayload } from '../../../store/interfaces/actions/actionInterface';
import { PomodoroCounterActions } from '../actions/pomodoroCounterAction';
import { CounterState } from '../enums/timerEnum';
import { PomodoroCounterState } from '../interfaces/PomodoroCounterState';

export const timerState: PomodoroCounterState = {
  counterState: CounterState.BREAK_END,
  timerTime: initialConfig.pomodoroTime,
};

export const pomodoroCounterReducer = (
  state: PomodoroCounterState = timerState,
  action: ActionWithPayload<PomodoroCounterActions, number | null>,
): PomodoroCounterState => {
  switch (action.type) {
    case PomodoroCounterActions.POMODORO_RUN:
      return {
        ...state,
        counterState: CounterState.POMODORO_RUNNING,
      };
    case PomodoroCounterActions.BREAK_RUN:
      return {
        ...state,
        counterState: CounterState.BREAK_RUNNING,
      };
    case PomodoroCounterActions.BREAK_PAUSE:
      return {
        ...state,
        counterState: CounterState.BREAK_PAUSE,
      };
    case PomodoroCounterActions.POMODORO_PAUSE:
      return {
        ...state,
        counterState: CounterState.POMODORO_PAUSE,
      };
    case PomodoroCounterActions.BREAK_END:
      return {
        ...state,
        counterState: CounterState.BREAK_END,
      };
    case PomodoroCounterActions.POMODORO_END:
      return {
        ...state,
        counterState: CounterState.POMODORO_END,
      };
    case PomodoroCounterActions.UPDATE_TIME:
      return {
        ...state,
        timerTime: action.payload,
      };
    default:
      return state;
  }
};
