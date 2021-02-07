import { NextFunction } from 'express';
import { Response } from 'express-serve-static-core';
import { TaskSearchResults, TaskRequestBody } from '../../../types/tasksAndNotesInterfaces';
import client from '../db/db';
import { Request as RequestWithBody } from '../models/auth/request.interface';

export const getTodos = async (req: RequestWithBody<never>, res: Response<TaskSearchResults>, next: NextFunction) => {
  const sql = `SELECT id, title, note, datecreated "dateCreated", isDone "isDone" 
              FROM todos 
              WHERE userID = ($1)
              ORDER BY dateCreated DESC`;
  const userId = req.user.id;

  try {
    const queryResult = await client.query(sql, [userId]);
    res.json({ result: queryResult.rows });
  } catch (err) {
    console.log(`error when getting todos ${err}`);
    next(err);
  }
};

export const handleAddTodo = async (req: RequestWithBody<TaskRequestBody>, res: Response, next: NextFunction) => {
  const { title, note, isDone } = req.body;
  const userId = req.user.id;

  const sql = `INSERT INTO todos (title, note, dateCreated, isDone, userId) VALUES ($1, $2, $3, $4, $5)`;

  try {
    await client.query(sql, [title, note, new Date(), isDone, userId]);
    res.json({});
  } catch (err) {
    console.log(`Error when inserting todo: ${err}`);
    next(err);
  }
};

export const handleEditTodo = async (req: RequestWithBody<TaskRequestBody>, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { title, note, isDone } = req.body;
  const userId = req.user.id;
  const sql = `UPDATE todos SET title = ($1), note = ($2), dateCreated = ($3), isDone = ($4) WHERE userid = ($5) AND id = ($6)`;

  try {
    await client.query(sql, [title, note, new Date(), isDone, userId, id]);
    res.json({});
  } catch (err) {
    console.log(`Error when updating todo: ${err}`);
    next(err);
  }
};
