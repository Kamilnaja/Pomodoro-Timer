import { Action } from 'redux';

export enum TaskActions {
  SHOW_ADD_NEW_TASK = 'Show add new task',
  HIDE_ADD_NEW_TASK = 'Hide add new task',
}

export const showAddNewTask = (): Action<TaskActions> => ({
  type: TaskActions.SHOW_ADD_NEW_TASK,
});

export const hideAddNewTask = (): Action<TaskActions> => ({
  type: TaskActions.HIDE_ADD_NEW_TASK,
});
