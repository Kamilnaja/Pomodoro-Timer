import { Action } from 'redux';

export interface TimerContainerProps {
  dispatch?: (args: Action) => void;
  handleSavePomodoro: () => void;
}
