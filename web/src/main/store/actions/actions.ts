export enum MainActions {
  SAVE_POMODORO = "SAVE_POMODORO",
  SAVE_POMODORO_SUCCESS = "SAVE_POMODORO_SUCCESS",
  SAVE_POMODORO_ERROR = "SAVE_POMODORO_ERROR",

  GET_POMODOROS = "GET_POMODOROS",
  GET_POMODOROS_SUCCESS = "GET_POMODOROS_SUCCESS",
  GET_POMODOROS_ERROR = "GET_POMODOROS_ERROR",
}

export function savePomodoro() {
  return {
    type: MainActions.SAVE_POMODORO,
  };
}

export function savePomodoroSuccess() {
  return {
    type: MainActions.SAVE_POMODORO_SUCCESS,
  };
}

export function savePomodoroError(error: any) {
  return {
    type: MainActions.SAVE_POMODORO_ERROR,
    error,
  };
}

export function getPomodoros() {
  return {
    type: MainActions.GET_POMODOROS,
  };
}

export function getPomodorosSuccess() {
  return {
    type: MainActions.GET_POMODOROS_SUCCESS,
  };
}

export function getPomodorosError(error: any) {
  return {
    type: MainActions.GET_POMODOROS_ERROR,
    error,
  };
}
