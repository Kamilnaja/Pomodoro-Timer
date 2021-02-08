import { Subtask, Task } from '../../../../../../types/tasksAndNotesInterfaces';

export interface CardComponentProps {
  task?: Task;
  addSubtask: () => void;
  handleSave: (payload: Task) => void;
}

export type FormData = {
  id: string;
  note: string;
  title: string;
  isDone: boolean;
  subtasks: Subtask[];
};
