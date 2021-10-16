import { CounterState } from '../store/enums/CounterState';
import { CurrentTimer } from '../store/interfaces/PomodoroCounterState';

export const playSound = (file: string) => {
  const audio = new Audio(file);
  audio.volume = 0.1;
  audio.play();
};

export const isAnyTimerRunning = (counterState: CounterState): boolean => counterState === CounterState.RUNNING;

export const isPomodoroMode = (currentTimer: CurrentTimer): boolean => currentTimer === CurrentTimer.POMODORO;
