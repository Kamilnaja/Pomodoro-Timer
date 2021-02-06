import { NextFunction } from 'express';
import { Request, Response } from 'express-serve-static-core';
import { Todo, TodoRequestBody, TodosSearchResults } from '../../../types/tasksAndNotesInterfaces';
import client from '../db/db';
import { Request as RequestWithBody } from '../models/auth/request.interface';

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

export const handleAddTodo = async (req: RequestWithBody<TodoRequestBody>, res: Response, next: NextFunction) => {
  const { title, note } = req.body;
  const userId = req.user.id;

  const sql = `INSERT INTO todos (title, note, dateCreated, userId, isDone) VALUES ($1, $2, $3, $4, $5)`;

  try {
    await client.query(sql, [title, note, new Date(), userId, false]);
    res.json({});
  } catch (err) {
    console.log(`Error when inserting todo: ${err}`);
    next(err);
  }
};
