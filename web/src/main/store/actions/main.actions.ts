import { handleErrors } from "../../../shared/scripts/utils";
import { initialConfig } from "../../../shared/settings/initialConfig";
import { incrementPomodoros } from "../../../stats/store/actions/stats.actions";

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

// thunk

export const savePomodoroAndIncrementCounter = () => (dispatch: Function) => {
  dispatch(savePomodoro());

  return fetch(initialConfig.apiUrl + "/stats/pomodoros", {
    method: "POST",
  })
    .then(handleErrors)
    .then(() => {
      dispatch(incrementPomodoros());
    })
    .catch((error) => dispatch(savePomodoroError(error)));
};