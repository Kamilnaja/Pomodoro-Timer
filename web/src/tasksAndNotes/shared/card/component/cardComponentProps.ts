import { Task } from '../../../../../../types/tasksAndNotesInterfaces';

export interface CardComponentProps {
  task?: Task;
  addSubtask: () => void;
}
