import { initialConfig } from 'shared/settings/initialConfig';
import { TimerState } from '../enums/timer.enum';
import { State } from '../interfaces/state.interface';

export const timerState: State = {
  timerState: TimerState.BREAK_END,
  timerTime: initialConfig.pomodoroTime,
};
