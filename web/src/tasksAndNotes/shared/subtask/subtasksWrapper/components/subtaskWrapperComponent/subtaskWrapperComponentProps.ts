import { Subtask } from '../../../../../../../../types/tasksAndNotesInterfaces';

export interface SubtaskComponentProps {
  subtasks: Subtask[];
  addSubtask: (subtask: Subtask) => void;
}
