import { Action } from 'redux';
import { Task } from '../../../../../types/tasksAndNotesInterfaces';
import { ActionWithPayload } from '../../../shared/store/interfaces/actions/actionInterface';

export enum TaskActions {
  SHOW_ADD_NEW_TASK = 'Show add new task',
  HIDE_ADD_NEW_TASK = 'Hide add new task',
  ADD_SUBTASK = 'Add subtask',
  ADD_SUBTASK_SUCCESS = 'Add subtask success',
  ADD_SUBTASK_ERROR = 'ADD subtask error',
}

const showAddNewTask = (): Action<TaskActions> => ({
  type: TaskActions.SHOW_ADD_NEW_TASK,
});

const hideAddNewTask = (): Action<TaskActions> => ({
  type: TaskActions.HIDE_ADD_NEW_TASK,
});

const addSubtask = (payload: Task): ActionWithPayload<TaskActions, Task> => ({
  type: TaskActions.ADD_SUBTASK,
  payload,
});

export const handleShowAddNewTask = () => (dispatch: (action: Action<any>) => void) => {
  dispatch(showAddNewTask());
};

export const handleHideAddNewTask = () => (dispatch: (action: Action<any>) => void) => {
  dispatch(hideAddNewTask());
};

export const handleAddSubtask = () => (dispatch: (action: ActionWithPayload<TaskActions, Task>) => void) => {};
