export enum MainActions {
  SAVE_POMODORO = "SAVE_POMODORO",
  SAVE_POMODORO_SUCCESS = "SAVE_POMODORO_SUCCESS",
  SAVE_POMODORO_ERROR = "SAVE_POMODORO_ERROR",
}

export const savePomodoro = () => ({
  type: MainActions.SAVE_POMODORO,
});

export const savePomodoroSuccess = () => ({
  type: MainActions.SAVE_POMODORO_SUCCESS,
});

export const savePomodoroError = (error: any) => ({
  type: MainActions.SAVE_POMODORO_ERROR,
  error,
});
