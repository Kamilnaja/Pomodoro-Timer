import { Subtask } from '../../../../../../types/tasksAndNotesInterfaces';

export const SHOW_ADD_NEW_TASK = 'Show add new task';
export const HIDE_ADD_NEW_TASK = 'Hide add new task';
export const ADD_SUBTASK = 'Add subtask';
export const ADD_SUBTASK_SUCCESS = 'Add subtask success';
export const ADD_SUBTASK_ERROR = 'ADD subtask error';

export interface ShowAddNewTaskAction {
  type: typeof SHOW_ADD_NEW_TASK;
}

export interface HideAddNewTaskAction {
  type: typeof HIDE_ADD_NEW_TASK;
}

export interface AddSubtaskAction {
  type: typeof ADD_SUBTASK;
  payload: Subtask;
}

export interface AddSubtaskSuccessAction {
  type: typeof ADD_SUBTASK_SUCCESS;
}

export interface AddSubtaskErrorAction {
  type: typeof ADD_SUBTASK_ERROR;
  payload: any;
}

export type TaskActionTypes =
  | ShowAddNewTaskAction
  | HideAddNewTaskAction
  | AddSubtaskAction
  | AddSubtaskSuccessAction
  | AddSubtaskErrorAction;
