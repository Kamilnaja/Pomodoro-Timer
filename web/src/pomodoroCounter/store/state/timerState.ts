import { initialConfig } from 'shared/settings/initialConfig';
import { CounterState } from '../enums/timerEnum';
import { PomodoroCounterState } from '../interfaces/PomodoroCounterState';

export const timerState: PomodoroCounterState = {
  counterState: CounterState.BREAK_END,
  timerTime: initialConfig.pomodoroTime,
};
