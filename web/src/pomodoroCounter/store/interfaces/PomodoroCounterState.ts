import { CounterState } from '../enums/CounterState';

export interface PomodoroCounterState {
  counterState: CounterState;
  counterTime: number;
}
