import { Response } from "express-serve-static-core";
import { QueryResult } from "pg";
import StatsSearchResult from "../../../types/statistics.interfaces";
import client from "../db/db";
import { Request } from "../models/auth/request.interface";

export const handleAddPomodoro = async (res: Response<Error | void, number>, login: string) => {
  const sql = "INSERT INTO pomodoros (userid, date) VALUES ($1, $2)";

  const values = [login, new Date()];
  try {
    await client.query(sql, values);
    res.json();
  } catch (err) {
    console.log(err.stack);
    res.sendStatus(500).json(err.stack);
  }
};

export const handleGetAllStats = async (login: string, res: Response<StatsSearchResult>) => {
  const sql = `SELECT date, COUNT (date) FROM pomodoros WHERE userid = ($1) GROUP BY date`;

  try {
    const queryResult: QueryResult = await client.query(sql, [login]);
    res.json({ result: queryResult.rows });
  } catch (err) {
    console.log(`handleGetAllPomodorosByDate${err.stack}`);
    res.sendStatus(500).json(err.stack);
  }
};

export const getTodayStats = async (req: Request, res: Response<StatsSearchResult>) => {
  const login = req.user.login;

  const sql = `SELECT date, COUNT(date) FROM pomodoros WHERE DATE(date) = CURRENT_DATE AND userid = ($1) GROUP BY date`;

  try {
    const queryResult: QueryResult = await client.query(sql, [login]);
    res.json({ result: queryResult.rows });
  } catch (err) {
    console.log(err.stack);
    res.sendStatus(500).json(err.stack);
  }
};

export const getStatsFrom = async (req: Request, res: Response<StatsSearchResult>) => {
  const login = req.user.login;
  const { from } = req.params;
  const sql = `SELECT date, COUNT (date) FROM pomodoros WHERE userid = ($1) AND DATE >= ($2) GROUP BY date`;

  try {
    const queryResult = await client.query(sql, [login, from]);
    res.json({ result: queryResult.rows });
  } catch (err) {
    console.log(`handleGetPomodorosInPeriod${err.stack}`);
    res.sendStatus(500).json(err.stack);
  }
};

export const getStatsBetween = async (req: Request, res: Response<StatsSearchResult>) => {
  const login = req.user.login;
  const { from, to } = req.params;
  const sql = `SELECT date, COUNT (date) FROM pomodoros WHERE userid = ($1) AND DATE BETWEEN ($2) AND ($3) GROUP BY date`;

  try {
    const queryResult = await client.query(sql, [login, from, to]);
    res.json({ result: queryResult.rows });
  } catch (err) {
    console.log(`handleGetPomodorosInPeriod${err.stack}`);
    res.sendStatus(500).json(err.stack);
  }
};
