export const GET_NOTES = 'get notes';
export const GET_NOTES_SUCCES = 'get notes succes';
export const GET_NOTES_ERROR = 'get notes error';

interface GetNotesAction {
  type: typeof GET_NOTES;
}

interface GetNotesSuccessAction {
  type: typeof GET_NOTES_SUCCES;
  payload: any;
}

interface GetNotesErrorAction {
  type: typeof GET_NOTES_ERROR;
  payload: any;
}

export type NotesActionTypes = GetNotesAction | GetNotesSuccessAction | GetNotesErrorAction;
