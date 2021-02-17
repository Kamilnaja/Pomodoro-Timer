import { initialConfig } from '../../../shared/settings/initialConfig';
import { ActionWithPayload } from '../../../store/interfaces/actions/actionInterface';
import { PomodoroCounterActions } from '../actions/pomodoroCounterAction';
import { CounterState } from '../enums/CounterState';
import { PomodoroCounterState } from '../interfaces/PomodoroCounterState';

export const timerState: PomodoroCounterState = {
  counterState: CounterState.END,
  counterTime: initialConfig.pomodoroTime,
};

export const pomodoroCounterReducer = (
  state: PomodoroCounterState = timerState,
  action: ActionWithPayload<PomodoroCounterActions, number | null>,
): PomodoroCounterState => {
  switch (action.type) {
    case PomodoroCounterActions.RUN:
      return {
        ...state,
        counterState: CounterState.RUNNING,
      };
    case PomodoroCounterActions.PAUSE:
      return {
        ...state,
        counterState: CounterState.PAUSE,
      };
    case PomodoroCounterActions.END:
      return {
        ...state,
        counterState: CounterState.END,
      };
    case PomodoroCounterActions.UPDATE_TIME:
      return {
        ...state,
        counterTime: action.payload,
      };
    default:
      return state;
  }
};
