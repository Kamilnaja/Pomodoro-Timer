import { TimerState } from '../../state/interfaces/StateInterface';

export interface TimerButtonsComponentProps {
  startNewPomodoro: () => void;
  startNewBreak: (time: number) => void;
  pauseCounter: () => void;
  startCounter: () => void;
  state: TimerState;
  time: string;
}
