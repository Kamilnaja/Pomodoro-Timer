import { TimerState } from '../../state/enums/timerEnum';

export interface TimerComponentProps {
  state: TimerState;
  startNewPomodoro: (event: MouseEvent) => void;
  startNewBreak: (time: number) => void;
  isAnyTimerRunning: () => boolean;
}
