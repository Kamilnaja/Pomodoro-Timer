import { PomodoroCounterState } from '../store/interfaces/PomodoroCounterState';

export interface CounterComponentProps {
  pauseCounter: () => void;
  startCounter: () => void;
  updateCounter: (time: number) => void;
  state: PomodoroCounterState;
  time: string;
}
