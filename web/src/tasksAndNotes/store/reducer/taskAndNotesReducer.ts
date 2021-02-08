import { Action } from 'redux';
import { ActionWithPayload } from 'shared/store/interfaces/actions/actionInterface';
import { NotesActions } from '../actions/notesActions';
import { TaskActions } from '../actions/taskActions';
import { TodosActions } from '../actions/todosActions';
import { TasksAndNotesState } from '../models/TasksAndNotesInterfaces';

export const initialState: TasksAndNotesState = {
  isLoading: false,
  error: '',
  todos: [],
  notes: [],
  calendarEntries: [],
  isAddingTaskActive: false,
};

export const taskAndNotesReducer = (
  state = initialState,
  action: ActionWithPayload<TodosActions | NotesActions, any> | Action<TaskActions>,
): TasksAndNotesState => {
  switch (action.type) {
    case TodosActions.GET_TODOS:
      return {
        ...state,
        isLoading: true,
      };
    case TodosActions.GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload.result,
      };
    case TodosActions.GET_TODOS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case TodosActions.SAVE_TODO:
      return {
        ...state,
        isLoading: true,
      };
    case TodosActions.SAVE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAddingTaskActive: false,
      };
    case TodosActions.SAVE_TODO_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
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
        notes: action.payload,
      };
    case NotesActions.GET_NOTES_ERROR:
      return {
        ...state,
        isLoading: true,
      };
    case TaskActions.SHOW_ADD_NEW_TASK:
      return {
        ...state,
        isAddingTaskActive: true,
      };
    case TaskActions.HIDE_ADD_NEW_TASK:
      return {
        ...state,
        isAddingTaskActive: false,
      };
    case TaskActions.ADD_SUBTASK:
      return {
        ...state,
      };
    default:
      return state;
  }
};
