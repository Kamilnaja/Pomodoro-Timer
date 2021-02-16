import { Action } from 'redux';

export enum PomodoroCounterActions {
  POMODORO_PAUSE = 'POMODORO_PAUSE',
  BREAK_PAUSE = 'BREAK_PAUSE',
  POMODORO_RUN = 'POMODORO_RUN',
  BREAK_RUN = 'BREAK_RUN',
  BREAK_END = 'BREAK_END',
  POMODORO_END = 'POMODORO_END',
}

export const pomodoroPause = (): Action<PomodoroCounterActions> => ({
  type: PomodoroCounterActions.POMODORO_PAUSE,
});

export const breakPause = (): Action<PomodoroCounterActions> => ({
  type: PomodoroCounterActions.BREAK_PAUSE,
});

export const pomodoroRun = (): Action<PomodoroCounterActions> => ({
  type: PomodoroCounterActions.POMODORO_RUN,
});

export const pomodoroEnd = (): Action<PomodoroCounterActions> => ({
  type: PomodoroCounterActions.POMODORO_END,
});

export const breakRun = (): Action<PomodoroCounterActions> => ({
  type: PomodoroCounterActions.BREAK_RUN,
});

export const breakEnd = (): Action<PomodoroCounterActions> => ({
  type: PomodoroCounterActions.BREAK_END,
});
