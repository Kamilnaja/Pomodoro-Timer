import { Todo } from '../../../../../types/tasksAndNotesInterfaces';

export type HandleGetTodos = () => void;

export interface TodosContainerProps {
  handleGetTodos: HandleGetTodos;
  todos: Todo[];
}
