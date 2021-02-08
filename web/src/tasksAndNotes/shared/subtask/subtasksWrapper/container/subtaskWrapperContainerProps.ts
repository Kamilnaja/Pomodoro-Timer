import { Subtask } from '../../../../../../../types/tasksAndNotesInterfaces';

export interface SubtaskWrapperContainerProps {
  handleAddSubtask: (subtask: Subtask) => void;
  subtasks: Subtask[];
}
