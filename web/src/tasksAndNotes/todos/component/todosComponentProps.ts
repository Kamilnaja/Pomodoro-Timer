import { Task } from '../../../../../types/tasksAndNotesInterfaces';

export interface TodosComponentProps {
  todos: Task[];
  isAddingTaskActive: boolean;
}
