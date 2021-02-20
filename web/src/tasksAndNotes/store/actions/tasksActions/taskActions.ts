import { Action } from 'redux';
import { Subtask } from '../../../../../../types/tasksAndNotesInterfaces';
import {
  ADD_SUBTASK,
  ADD_SUBTASK_ERROR,
  ADD_SUBTASK_SUCCESS,
  HIDE_ADD_NEW_TASK,
  SHOW_ADD_NEW_TASK,
  TaskActionTypes,
} from './taskActionsTypes';

const showAddNewTask = (): TaskActionTypes => ({
  type: SHOW_ADD_NEW_TASK,
});

const hideAddNewTask = (): TaskActionTypes => ({
  type: HIDE_ADD_NEW_TASK,
});

const addSubtask = (payload: Subtask): TaskActionTypes => ({
  type: ADD_SUBTASK,
  payload,
});

const addSubtaskSuccess = (): TaskActionTypes => ({
  type: ADD_SUBTASK_SUCCESS,
});

const addSubtaskError = (payload: any): TaskActionTypes => ({
  type: ADD_SUBTASK_ERROR,
  payload,
});

export const handleShowAddNewTask = () => (dispatch: (action: Action<any>) => void) => {
  dispatch(showAddNewTask());
};

export const handleHideAddNewTask = () => (dispatch: (action: Action<any>) => void) => {
  dispatch(hideAddNewTask());
};

export const handleAddSubtask = (payload: Subtask) => (dispatch: (action: TaskActionTypes) => void) => {
  dispatch(addSubtask(payload));
};
