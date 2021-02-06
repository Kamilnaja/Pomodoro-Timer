interface BaseTask {
  id: string;
  title: string;
  note: string;
  dateCreated: Date;
}

export interface Todo extends BaseTask {
  subtasks: Todo[];
  isDone: boolean;
}

export interface Note extends BaseTask {}

export interface CalendarEntry extends BaseTask {
  dueDate: Date;
  isDone: boolean;
}

export interface TodosSearchResults {
  todos: Todo[];
}

export interface TodoRequestBody {
  id?: string;
  title: string;
  note?: string;
  dateCreated?: Date;
  isDone?: boolean;
}
