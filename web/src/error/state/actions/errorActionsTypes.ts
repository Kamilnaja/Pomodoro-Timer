export const SET_ERROR = 'SET_ERROR';
export const HIDE_ERROR = 'HIDE_ERROR';

export interface SetErrorAction {
  type: typeof SET_ERROR;
  error: any;
}

export interface HideError {
  type: typeof HIDE_ERROR;
}

export type ErrorActionsTypes = SetErrorAction | HideError;
