import { Action } from 'redux';
import { initialConfig } from '../../../shared/settings/initialConfig';
import { PomodoroCounterActions } from '../actions/pomodoroCounterAction';
import { CounterState } from '../enums/timerEnum';
import { PomodoroCounterState } from '../interfaces/PomodoroCounterState';

export const timerState: PomodoroCounterState = {
  counterState: CounterState.BREAK_END,
  timerTime: initialConfig.pomodoroTime,
};

export const pomodoroCounterReducer = (
  state: PomodoroCounterState = timerState,
  action: Action<PomodoroCounterActions>,
): PomodoroCounterState => {
  switch (action.type) {
    case PomodoroCounterActions.START_COUNTER:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
