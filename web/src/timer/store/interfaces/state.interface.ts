import { TimerState } from '../enums/timer.enum';

export interface State {
  timerState: TimerState;
  timerTime: number;
}
