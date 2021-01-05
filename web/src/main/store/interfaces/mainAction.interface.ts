import { MainActions } from "../actions/main.actions";

export interface MainAction {
  type: MainActions;
  payload: {
    pomodorosDoneToday: number;
    allPomodoros: number;
  };
}
