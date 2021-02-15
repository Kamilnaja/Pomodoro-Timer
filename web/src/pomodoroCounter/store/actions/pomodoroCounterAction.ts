import { Action } from 'redux';

export enum PomodoroCounterActions {
  START_COUNTER = 'START_COUNTER',
}

export const startCounter = (): Action<PomodoroCounterActions> => ({
  type: PomodoroCounterActions.START_COUNTER,
});
