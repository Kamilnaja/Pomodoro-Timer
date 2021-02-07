import { Action } from 'redux';
import { getCurrentMonth, getCurrentYear } from 'shared/scripts/utils';
import { ActionWithPayload } from 'shared/store/interfaces/actions/actionInterface';
import { handleGetStatsInPeriod } from 'stats/store/actions/statsActions';
import { updateData } from '../../../shared/scripts/requests';

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
  updateData('stats', {}, 'POST')
    .then(() => dispatch(handleGetStatsInPeriod(getCurrentYear(), getCurrentMonth())))
    .catch(err => dispatch(savePomodoroError(err)));
};
