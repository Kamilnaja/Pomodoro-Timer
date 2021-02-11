import { Action } from 'redux';
import { Subtask } from '../../../../../types/tasksAndNotesInterfaces';
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

const addSubtask = (payload: Subtask): ActionWithPayload<TaskActions, Subtask> => ({
  type: TaskActions.ADD_SUBTASK,
  payload,
});

// const addSubtaskSuccess = (): Action<TaskActions> => ({
//   type: TaskActions.ADD_SUBTASK_SUCCESS,
// });

// const addSubtaskError = (payload: any): ActionWithPayload<TaskActions, any> => ({
//   type: TaskActions.ADD_SUBTASK_ERROR,
//   payload,
// });

export const handleShowAddNewTask = () => (dispatch: (action: Action<any>) => void) => {
  dispatch(showAddNewTask());
};

export const handleHideAddNewTask = () => (dispatch: (action: Action<any>) => void) => {
  dispatch(hideAddNewTask());
};

export const handleAddSubtask = (payload: Subtask) => (
  dispatch: (action: ActionWithPayload<TaskActions, Subtask>) => void,
) => {
  dispatch(addSubtask(payload));

  console.log('dispatching add new task');
};
