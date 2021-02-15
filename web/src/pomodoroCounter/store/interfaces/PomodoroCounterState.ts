import { CounterState } from '../enums/timerEnum';

export interface PomodoroCounterState {
  counterState: CounterState;
  timerTime: number;
}
