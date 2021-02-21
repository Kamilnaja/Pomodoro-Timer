export const PAUSE = 'PAUSE';
export const RUN = 'RUN';
export const END = 'END';
export const UPDATE_TIME = 'UPDATE_TIME';
export const SET_MODE_POMODORO = 'SET_MODE_POMODORO';
export const SET_MODE_BREAK = 'SET_MODE_BREAK';

export interface PauseAction {
  type: typeof PAUSE;
}

export interface RunAction {
  type: typeof RUN;
}

export interface EndAction {
  type: typeof END;
}

export interface UpdateTimeAction {
  type: typeof UPDATE_TIME;
  payload: number;
}

export interface SetModePomodoroAction {
  type: typeof SET_MODE_POMODORO;
}

export interface SetModeBreakAction {
  type: typeof SET_MODE_BREAK;
  payload: number;
}

export type PomodoroCounterActionsTypes =
  | PauseAction
  | RunAction
  | EndAction
  | UpdateTimeAction
  | SetModePomodoroAction
  | SetModeBreakAction;
