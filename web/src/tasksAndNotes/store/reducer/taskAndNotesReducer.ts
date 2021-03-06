import {
  GET_NOTES,
  GET_NOTES_ERROR,
  GET_NOTES_SUCCES,
  NotesActionTypes,
} from '../actions/notesActions/notesActionsTypes';
import {
  ADD_SUBTASK,
  HIDE_ADD_NEW_TASK,
  SHOW_ADD_NEW_TASK,
  TaskActionTypes,
} from '../actions/tasksActions/taskActionsTypes';
import {
  GET_TODOS,
  GET_TODOS_ERROR,
  GET_TODOS_SUCCESS,
  SAVE_TODO,
  SAVE_TODO_ERROR,
  SAVE_TODO_SUCCESS,
  TodosActionsTypes,
} from '../actions/todosActions/todosActionsTypes';
import { TasksAndNotesState } from '../models/TasksAndNotesInterfaces';

export const taskAndNotesInitialState: TasksAndNotesState = {
  isLoading: false,
  error: '',
  todos: [],
  notes: [],
  calendarEntries: [],
  isAddingTaskActive: false,
};

export const taskAndNotesReducer = (
  state = taskAndNotesInitialState,
  action: TodosActionsTypes | NotesActionTypes | TaskActionTypes,
): TasksAndNotesState => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload.result,
      };
    case GET_TODOS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case SAVE_TODO:
      return {
        ...state,
        isLoading: true,
      };
    case SAVE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAddingTaskActive: false,
      };
    case SAVE_TODO_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_NOTES:
      return {
        ...state,
        isLoading: true,
      };
    case GET_NOTES_SUCCES:
      return {
        ...state,
        isLoading: false,
        notes: action.payload,
      };
    case GET_NOTES_ERROR:
      return {
        ...state,
        isLoading: true,
      };
    case SHOW_ADD_NEW_TASK:
      return {
        ...state,
        isAddingTaskActive: true,
      };
    case HIDE_ADD_NEW_TASK:
      return {
        ...state,
        isAddingTaskActive: false,
      };
    case ADD_SUBTASK:
      return {
        ...state,
      };
    default:
      return state;
  }
};
