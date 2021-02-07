import { Action } from 'redux';

export enum TaskActions {
  SHOW_ADD_NEW_TASK = 'Show add new task',
  HIDE_ADD_NEW_TASK = 'Hide add new task',
}

const showAddNewTask = (): Action<TaskActions> => ({
  type: TaskActions.SHOW_ADD_NEW_TASK,
});

const hideAddNewTask = (): Action<TaskActions> => ({
  type: TaskActions.HIDE_ADD_NEW_TASK,
});

export const handleShowAddNewTask = () => (dispatch: (action: Action<any>) => void) => {
  dispatch(showAddNewTask());
};

export const handleHideAddNewTask = () => (dispatch: (action: Action<any>) => void) => {
  dispatch(hideAddNewTask());
};
