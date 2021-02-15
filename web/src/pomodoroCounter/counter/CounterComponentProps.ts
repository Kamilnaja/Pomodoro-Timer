import { PomodoroCounterState } from '../store/interfaces/PomodoroCounterState';

export interface CounterComponentProps {
  pauseCounter: () => void;
  startCounter: () => void;
  state: PomodoroCounterState;
  time: string;
}
