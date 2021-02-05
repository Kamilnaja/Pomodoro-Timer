interface BaseTask {
  id: string;
  title: string;
  note: string;
  dateCreated: Date;
}

export interface Todo extends BaseTask {
  subtasks: Todo[];
}

export interface Note extends BaseTask {}

export interface CalendarEntry extends BaseTask {
  dueDate: Date;
}
