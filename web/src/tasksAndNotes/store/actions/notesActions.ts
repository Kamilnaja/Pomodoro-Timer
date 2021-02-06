import { Action } from 'redux';
import { Task } from '../../../../../types/tasksAndNotesInterfaces';
import { ActionWithPayload } from '../../../shared/store/interfaces/actions/actionInterface';

export enum NotesActions {
  GET_NOTES = 'get notes',
  GET_NOTES_SUCCES = 'get notes succes',
  GET_NOTES_ERROR = 'get notes error',
}

const getNotes = (): Action<NotesActions> => ({
  type: NotesActions.GET_NOTES,
});

const getNotesucces = (payload: Task[]): ActionWithPayload<NotesActions, Task[]> => ({
  type: NotesActions.GET_NOTES_SUCCES,
  payload,
});

const getNotesError = (payload: any): ActionWithPayload<NotesActions, any> => ({
  type: NotesActions.GET_NOTES_ERROR,
  payload,
});
