import { State } from "./state";
import { TimerState } from "./timer.enum";

export const initialState: State = {
  timerState: TimerState.BREAK_END,
  pomodoroTime: 25,
  pomodorosInSession: 0,
  shortBreakTime: 5 * 60 * 1000,
  longBreakTime: 15 * 60 * 1000,
  timerTime: 500,
};
