import {
  END,
  PAUSE,
  PomodoroCounterActionsTypes,
  RUN,
  SET_MODE_BREAK,
  SET_MODE_POMODORO,
  UPDATE_TIME,
} from './pomodoroCounterActionTypes';

export const pause = (): PomodoroCounterActionsTypes => ({
  type: PAUSE,
});

export const run = (): PomodoroCounterActionsTypes => ({
  type: RUN,
});

export const end = (): PomodoroCounterActionsTypes => ({
  type: END,
});

export const updateCounter = (payload: number): PomodoroCounterActionsTypes => ({
  type: UPDATE_TIME,
  payload,
});

export const setModePomodoro = (): PomodoroCounterActionsTypes => ({
  type: SET_MODE_POMODORO,
});

export const setModeBreak = (payload: number): PomodoroCounterActionsTypes => ({
  type: SET_MODE_BREAK,
  payload,
});

// thunk
export const handleSetModePomodoro = () => (dispatch: (action: PomodoroCounterActionsTypes) => void) => {
  dispatch(setModePomodoro());
  dispatch(end());
};

export const handleSetModeBreak = (time: number) => (dispatch: (action: PomodoroCounterActionsTypes) => void) => {
  dispatch(setModeBreak(time));
  dispatch(end());
};
