import { HideError, HIDE_ERROR, SetErrorAction, SET_ERROR } from './errorActionsTypes';

export const setError = (error: any): SetErrorAction => {
  return {
    type: SET_ERROR,
    error: error,
  };
};

export const hideError = (): HideError => {
  return {
    type: HIDE_ERROR,
  };
};
