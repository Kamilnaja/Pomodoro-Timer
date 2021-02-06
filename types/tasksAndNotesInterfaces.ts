import { SearchResult } from './commonInterfaces';

export enum TaskType {
  CALENDAR,
  TODO,
  NOTE,
}

export interface Task {
  id: string;
  isDone: boolean;
  title: string;
  note: string;
  dateCreated: Date;
  subtasks: Task[];
  type: TaskType;
  dueDate: Date;
}

export interface TaskSearchResults extends SearchResult<Task> {}

export interface TaskRequestBody {
  id?: string;
  isDone: boolean;
  title: string;
  note: string;
  dateCreated: Date;
  subtasks: Task[];
  type: TaskType;
  dueDate: Date;
}
