import { NextFunction } from 'express';
import { Request, Response } from 'express-serve-static-core';
import TodosSearchResults, { Todo } from '../../../types/tasksAndNotesInterfaces';

export const getTodos = (req: Request, res: Response<TodosSearchResults>, next: NextFunction) => {
  const todosList: Todo[] = [];
  todosList.push({
    dateCreated: new Date(),
    id: '1',
    isDone: false,
    note: 'Lorem ipsum dolor sit amet',
    subtasks: [],
    title: 'Hello world',
  });

  todosList.push({
    dateCreated: new Date(),
    id: '2',
    isDone: true,
    note: 'Niedaleko Damaszku siedział diabeł na daszku',
    subtasks: [],
    title: 'Lorem ipsum dolor',
  });
  res.json({
    todos: todosList,
  });
};
