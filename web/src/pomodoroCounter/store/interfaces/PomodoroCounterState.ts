import { CounterState } from '../enums/timerEnum';

export interface PomodoroCounterState {
  counterState: CounterState;
  counterTime: number;
}
