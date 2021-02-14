import { CounterState } from '../enums/timerEnum';

export interface TimerState {
  counterState: CounterState;
  timerTime: number;
}
