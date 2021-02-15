import { TimerState } from '../state/interfaces/StateInterface';

export interface CounterComponentProps {
  pauseCounter: () => void;
  startCounter: () => void;
  state: TimerState;
  time: string;
}
