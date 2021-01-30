import { Action } from 'redux';
import { handleErrors } from 'shared/scripts/utils';
import { config } from 'shared/settings/initialConfig';
import { ActionWithPayload } from 'shared/store/interfaces/actions/action.interface';
import { store } from 'shared/store/reducers/reducer';
import { getLastStats } from 'stats/store/actions/stats.actions';

export enum MainAction {
  SAVE_POMODORO = 'SAVE_POMODORO',
  SAVE_POMODORO_SUCCESS = 'SAVE_POMODORO_SUCCESS',
  SAVE_POMODORO_ERROR = 'SAVE_POMODORO_ERROR',
}

export const savePomodoro = (): Action<MainAction> => ({
  type: MainAction.SAVE_POMODORO,
});

export const savePomodoroSuccess = (): Action<MainAction> => ({
  type: MainAction.SAVE_POMODORO_SUCCESS,
});

export const savePomodoroError = (error: any): ActionWithPayload<MainAction, any> => ({
  type: MainAction.SAVE_POMODORO_ERROR,
  payload: error,
});

// thunk

export const savePomodoroAndReloadStats = () => (dispatch: (arg: Action | any) => void) => {
  dispatch(savePomodoro());
  const token = store.getState().auth.token;

  return fetch(`${config.url.API_URL}/stats/`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(handleErrors)
    .then(() => {
      dispatch(getLastStats(30));
    })
    .catch(error => dispatch(savePomodoroError(error)));
};
