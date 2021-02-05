import { ActionWithPayload } from 'shared/store/interfaces/actions/actionInterface';
import { NotesActions } from '../actions/notesActions';
import { TodosActions } from '../actions/todosActions';
import { TasksAndNotesState } from '../models/TasksAndNotesInterfaces';

export const initialState: TasksAndNotesState = {
  isLoading: false,
  error: '',
  todos: null,
  notes: null,
  calendarEntries: null,
};

export const taskAndNotesReducer = (
  state = initialState,
  action: ActionWithPayload<TodosActions | NotesActions, TodosActions | NotesActions | any>,
): TasksAndNotesState => {
  switch (action.type) {
    case TodosActions.GET_TODO:
      return {
        ...state,
        isLoading: true,
      };
    case TodosActions.GET_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case TodosActions.GET_TODO_ERROR:
      return {
        ...state,
        isLoading: true,
      };
    case NotesActions.GET_NOTES:
      return {
        ...state,
        isLoading: true,
      };
    case NotesActions.GET_NOTES_SUCCES:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case NotesActions.GET_NOTES_ERROR:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
