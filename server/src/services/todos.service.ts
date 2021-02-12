import { NextFunction } from 'express';
import { Response } from 'express-serve-static-core';
import { TaskRequestBody, TaskSearchResults } from '../../../types/tasksAndNotesInterfaces';
import client from '../db/db';
import { Request as RequestWithBody } from '../models/auth/request.interface';

export const getTodos = async (req: RequestWithBody<{}>, res: Response<TaskSearchResults>, next: NextFunction) => {
  const sql = `SELECT todos.id, todos.title, todos.note, todos.datecreated "dateCreated", todos.isDone "isDone", subtasks.parentTaskId
               FROM todos 
               LEFT JOIN subtasks
                ON todos.id = subtasks.parentTaskId
               WHERE userID = ($1) and todos.isDone = false
               ORDER BY todos.dateCreated DESC`;

  handleSelectTodos(sql, req, res, next);
};

export const handleSelectTodos = async (sql: string, req: any, res: any, next: NextFunction) => {
  const userId = req.user.id;

  try {
    const queryResult = await client.query(sql, [userId]);
    res.json({ result: queryResult.rows });
  } catch (err) {
    console.log(`error while get request:  ${err}`);
    next(err);
  }
};

export const handleAddTodo = async (req: RequestWithBody<TaskRequestBody>, res: Response, next: NextFunction) => {
  const { title, note, isDone, subtasks } = req.body;
  const userId = req.user.id;

  const sql = `INSERT INTO todos (title, note, date_created, is_done, user_id) VALUES ($1, $2, $3, $4, $5)`;
  const sqlSubtasks = `INSERT INTO subtasks (title, note, parent_task_id) VALUES ($1, $2, $3)`;

  try {
    await client.query(sql, [title, note, isDone, userId]);
    res.json({});
  } catch (err) {
    console.log(`Error when inserting todo: ${err}`);
    next(err);
  }

  for (const item of subtasks) {
    try {
      await client.query(sqlSubtasks, [item.title, item.note, new Date(), item.isDone, item.parentId]);
      res.json({});
    } catch (err) {
      console.log(`Error when inserting todo: ${err}`);
      next(err);
    }
  }
};

export const handleEditTodo = async (req: RequestWithBody<TaskRequestBody>, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { title, note, isDone } = req.body;
  const userId = req.user.id;
  const sql = `
    UPDATE todos 
    SET title = ($1), note = ($2), dateCreated = ($3), isDone = ($4) 
    WHERE userid = ($5) AND id = ($6)`;

  try {
    await client.query(sql, [title, note, new Date(), isDone, userId, id]);
    res.json({});
  } catch (err) {
    console.log(`Error when updating todo: ${err}`);
    next(err);
  }
};
