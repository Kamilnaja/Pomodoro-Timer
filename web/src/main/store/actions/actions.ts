export enum MainActions {
  SAVE_POMODORO = "SAVE_POMODORO",
  SAVE_POMODORO_SUCCESS = "SAVE_POMODORO_SUCCESS",
  SAVE_POMODORO_ERROR = "SAVE_POMODORO_ERROR",
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
