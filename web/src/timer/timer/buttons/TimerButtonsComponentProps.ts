export interface TimerButtonsComponentProps {
  startNewPomodoro: () => void;
  startNewBreak: (time: number) => void;
  isAnyTimerRunning: () => boolean;
  pauseCounter: () => void;
  startCounter: () => void;
  time: string;
}
