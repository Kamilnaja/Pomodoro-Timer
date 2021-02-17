import { PomodoroCounterState } from '../store/interfaces/PomodoroCounterState';

export interface CounterComponentProps {
  updateCounter: (time: number) => void;
  counter: PomodoroCounterState;
  pomodoroPause: () => void;
  breakPause: () => void;
  pomodoroRun: () => void;
  breakRun: () => void;
  breakEnd: () => void;
  pomodoroEnd: () => void;
  handleSavePomodoro: () => void;
}
