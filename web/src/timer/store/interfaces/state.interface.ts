import { TimerState } from "../enums/timer.enum";

export interface State {
  timerState: TimerState;
  pomodorosInSession: number;
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  timerTime: number;
}
