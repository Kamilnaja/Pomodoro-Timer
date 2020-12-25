import { TimerState } from "./timer.enum";

export interface State {
  timerState: TimerState;
  pomodorosInSession: 0;
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  timerTime: number;
}
