import { CounterState } from '../enums/CounterState';

export interface PomodoroCounterState {
  counterState: CounterState;
  counterTime: number;
  currentTimer: CurrentTimer;
}

export enum CurrentTimer {
  POMODORO = 'POMODORO',
  LONG_BREAK = 'LONG_BREAK',
  SHORT_BREAK = 'SHORT_BREAK',
}
