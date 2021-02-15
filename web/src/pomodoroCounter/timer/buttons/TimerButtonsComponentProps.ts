import { TimerState } from '../../state/interfaces/StateInterface';

export interface TimerButtonsComponentProps {
  pauseCounter: () => void;
  startCounter: () => void;
  state: TimerState;
  time: string;
}
