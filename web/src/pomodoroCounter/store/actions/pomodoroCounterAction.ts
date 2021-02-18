import { Action } from 'redux';
import { ActionWithPayload } from '../../../store/interfaces/actions/actionInterface';

export enum PomodoroCounterActions {
  PAUSE = 'PAUSE',
  RUN = 'RUN',
  END = 'END',
  UPDATE_TIME = 'UPDATE_TIME',
  SET_MODE_POMODORO = 'SET_MODE_POMODORO',
  SET_MODE_BREAK = 'SET_MODE_BREAK',
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

export const setModePomodoro = (): Action<PomodoroCounterActions> => ({
  type: PomodoroCounterActions.SET_MODE_POMODORO,
});

export const setModeBreak = (payload: number): ActionWithPayload<PomodoroCounterActions, number> => ({
  type: PomodoroCounterActions.SET_MODE_BREAK,
  payload,
});

// thunk
export const handleSetModePomodoro = () => (dispatch: (action: Action<PomodoroCounterActions>) => void) => {
  dispatch(setModePomodoro());
  dispatch(end());
};

export const handleSetModeBreak = (time: number) => (dispatch: (action: Action<PomodoroCounterActions>) => void) => {
  dispatch(setModeBreak(time));
  dispatch(end());
};
