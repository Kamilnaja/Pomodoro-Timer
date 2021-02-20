import { SearchResult } from './commonInterfaces';

export enum TaskType {
  CALENDAR,
  TODO,
  NOTE,
}

export interface BaseTask {
  id: string;
  isDone: boolean;
  title: string;
  note: string;
}

export interface Subtask extends BaseTask {
  parentId: string;
}

export interface Task extends BaseTask {
  dateCreated: Date;
  subtasks: Subtask[];
  type: TaskType;
  dueDate: Date;
}

export interface TaskSearchResults extends SearchResult<Task[]> {}

export interface SubtaskSearchResult extends SearchResult<Subtask> {}

export interface TaskRequestBody {
  id?: string;
  isDone: boolean;
  title: string;
  note: string;
  dateCreated: Date;
  subtasks: Subtask[];
  type: TaskType;
  dueDate: Date;
}
