import { Subtask } from '../../../../../../../types/tasksAndNotesInterfaces';

export interface SubtaskContainerProps {
  handleAddSubtask: (subtask: Subtask) => void;
  subtasks: Subtask[];
}
