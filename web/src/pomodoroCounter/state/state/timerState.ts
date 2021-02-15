import { initialConfig } from 'shared/settings/initialConfig';
import { CounterState } from '../enums/timerEnum';
import { TimerState } from '../interfaces/StateInterface';

export const timerState: TimerState = {
  counterState: CounterState.BREAK_END,
  timerTime: initialConfig.pomodoroTime,
};
