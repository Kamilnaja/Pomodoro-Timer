import { Task, TaskType } from '../../../../types/tasksAndNotesInterfaces';

export const createTasks = (): Task[] => [
  {
    dateCreated: new Date('01-12-2021'),
    subtasks: [],
    dueDate: new Date('01-12-2020'),
    id: '1',
    isDone: false,
    note: 'lorem ipsum dolor',
    title: 'hello world',
    type: TaskType.TODO,
  },
];
