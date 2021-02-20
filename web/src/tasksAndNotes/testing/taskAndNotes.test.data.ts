import { Task, TaskType } from '../../../../types/tasksAndNotesInterfaces';

export const createTasks = (): Task[] => [
  {
    dateCreated: new Date(),
    subtasks: [],
    dueDate: new Date(),
    id: '1',
    isDone: false,
    note: 'lorem ipsum dolor',
    title: 'hello world',
    type: TaskType.TODO,
  },
];
