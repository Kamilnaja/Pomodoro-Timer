import { Action } from 'redux';
import { config } from 'shared/settings/initialConfig';
import { ActionWithPayload } from 'shared/store/interfaces/actions/actionInterface';
import { store } from 'shared/store/reducers/reducer';
import { handleGetStatsInPeriod } from 'stats/store/actions/statsActions';
import { getCurrentMonth, getCurrentYear } from '../../../shared/scripts/utils';

export enum MainAction {
  SAVE_POMODORO = 'SAVE_POMODORO',
  SAVE_POMODORO_SUCCESS = 'SAVE_POMODORO_SUCCESS',
  SAVE_POMODORO_ERROR = 'SAVE_POMODORO_ERROR',
}

const savePomodoro = (): Action<MainAction> => ({
  type: MainAction.SAVE_POMODORO,
});

const savePomodoroError = (error: any): ActionWithPayload<MainAction, any> => ({
  type: MainAction.SAVE_POMODORO_ERROR,
  payload: error,
});

// thunk

export const savePomodoroAndReloadStats = () => async (dispatch: (arg: Action | any) => void) => {
  dispatch(savePomodoro());
  makePostStatsRequest()
    .then(() => dispatch(handleGetStatsInPeriod(getCurrentYear(), getCurrentMonth())))
    .catch(err => dispatch(savePomodoroError(err)));
};

const makePostStatsRequest = async () => {
  const token = store.getState().auth.token;

  const response = await fetch(`${config.url.API_URL}/stats/`, {
    method: 'POST',

    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return response.ok ? Promise.resolve() : Promise.reject();
};
