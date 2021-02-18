import { PomodoroCounterState } from '../store/interfaces/PomodoroCounterState';

export interface CounterComponentProps {
  updateCounter: (time: number) => void;
  counter: PomodoroCounterState;
  pause: () => void;
  run: () => void;
  end: () => void;
  handleSavePomodoro: () => void;
  handlePostTimer: () => void;
}
