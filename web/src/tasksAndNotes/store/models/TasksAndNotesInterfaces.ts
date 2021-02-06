import { Task } from '../../../../../types/tasksAndNotesInterfaces';

export interface TasksAndNotesState {
  todos: Task[];
  notes: Task[];
  calendarEntries: Task[];
  isLoading: boolean;
  error: any;
  isAddingTaskActive: boolean;
}
