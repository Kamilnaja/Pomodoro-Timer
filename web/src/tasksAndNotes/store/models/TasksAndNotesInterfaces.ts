import { CalendarEntry, Note, Todo } from '../../../../../types/tasksAndNotesInterfaces';

export interface TasksAndNotesState {
  todos: Todo[];
  notes: Note[];
  calendarEntries: CalendarEntry[];
  isLoading: boolean;
  error: any;
  isAddingTaskActive: boolean;
}
