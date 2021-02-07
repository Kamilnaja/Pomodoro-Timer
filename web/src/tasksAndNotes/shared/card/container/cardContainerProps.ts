import { Task } from '../../../../../../types/tasksAndNotesInterfaces';

export interface CardCointainerProps {
  task?: Task;
  handleSave: (payload: Task) => void;
}
