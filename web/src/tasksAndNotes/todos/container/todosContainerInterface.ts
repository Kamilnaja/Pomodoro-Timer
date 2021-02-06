import { TasksAndNotesState } from '../../store/models/TasksAndNotesInterfaces';

export type HandleGetTodos = () => void;

export interface TodosContainerProps {
  handleGetTodos: HandleGetTodos;
  todosState: TasksAndNotesState;
}
