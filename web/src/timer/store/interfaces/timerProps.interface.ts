import { Action } from "redux";

export interface TimerProps {
  dispatch?: (args: Action) => void;
  handleSavePomodoro: () => void;
}
