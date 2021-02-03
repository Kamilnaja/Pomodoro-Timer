import { initialConfig } from 'shared/settings/initialConfig';
import { TimerState } from '../enums/timerEnum';
import { State } from '../interfaces/stateInterface';

export const timerState: State = {
  timerState: TimerState.BREAK_END,
  timerTime: initialConfig.pomodoroTime,
};
