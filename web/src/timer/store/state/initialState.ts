import { TimerState } from "../enums/timer.enum";
import { State } from "../interfaces/state.interface";

export const initialState: State = {
  timerState: TimerState.BREAK_END,
  pomodoroTime: 3000,
  pomodorosInSession: 0,
  // shortBreakTime: 5 * 60 * 1000,
  shortBreakTime: 2000,
  // longBreakTime: 15 * 60 * 1000,
  longBreakTime: 3000,
  timerTime: 3000,
};
