import { Action } from 'redux';
import { ActionWithPayload } from '../../../store/interfaces/actions/actionInterface';

export enum PomodoroCounterActions {
  PAUSE = 'PAUSE',
  RUN = 'RUN',
  END = 'END',
  UPDATE_TIME = 'UPDATE_TIME',
}

export const pause = (): Action<PomodoroCounterActions> => ({
  type: PomodoroCounterActions.PAUSE,
});

export const run = (): Action<PomodoroCounterActions> => ({
  type: PomodoroCounterActions.RUN,
});

export const end = (): Action<PomodoroCounterActions> => ({
  type: PomodoroCounterActions.END,
});

export const updateCounter = (payload: number): ActionWithPayload<PomodoroCounterActions, number> => ({
  type: PomodoroCounterActions.UPDATE_TIME,
  payload,
});

export type PomodorActions = Action<PomodoroCounterActions> | ActionWithPayload<PomodoroCounterActions, number>;
