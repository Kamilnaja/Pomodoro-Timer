import { Response } from "express-serve-static-core";
import { QueryResult } from "pg";
import client from "../db/db";
import TodayStatistics from "../../../types/todayStatistics.interface";

export async function handleAddPomodoro(res: Response<Error | void, number>, login: string) {
  const sql = "INSERT INTO pomodoros (userid, date) VALUES ($1, $2)";

  const values = [login, new Date()];
  try {
    await client.query(sql, values);
    res.json();
  } catch (err) {
    console.log(err.stack);
    res.sendStatus(500).json(err.stack);
  }
}

export async function handleGetTodaysPomodoros(res: Response<Error | TodayStatistics>, login: string) {
  const sql = `SELECT COUNT(*) FROM pomodoros WHERE DATE(date) = CURRENT_DATE AND userid = ($1)`;

  try {
    const queryResult: QueryResult = await client.query(sql, [login]);
    res.json({ result: queryResult.rows[0].count });
  } catch (err) {
    console.log(err.stack);
    res.sendStatus(500).json(err.stack);
  }
}

export async function handleGetAllPomodoros(res: any, login: string) {
  const sql = `SELECT COUNT (*) FROM pomodoros WHERE userid = ($1)`;

  try {
    const queryResult: QueryResult = await client.query(sql, [login]);
    res.json({ result: queryResult.rows[0].count });
  } catch (err) {
    console.log(`handleGetAllPomodoros ${err.stack}`);
    res.sendStatus(500).json(err.stack);
  }
}

export async function handleGetAllPomodorosByDate(res: any, login: string) {
  const sql = `SELECT date, COUNT (date) FROM pomodoros WHERE userid = ($1) GROUP BY date`;

  try {
    const queryResult: QueryResult = await client.query(sql, [login]);
    res.json({ result: queryResult.rows });
  } catch (err) {
    console.log(`handleGetAllPomodorosByDate${err.stack}`);
    res.sendStatus(500).json(err.stack);
  }
}
