import { Response } from "express-serve-static-core";
import { QueryResult } from "pg";
import StatsSearchResult from "../../../types/statistics.interfaces";
import client from "../db/db";
import { Request } from "../models/auth/request.interface";

export const handleAddPomodoro = async (res: Response<Error | void, number>, login: string) => {
  const sql = "INSERT INTO pomodoros (userID, date) VALUES ($1, $2)";

  const values = [login, new Date()];
  try {
    await client.query(sql, values);
    res.json();
  } catch (err) {
    console.log(err.stack);
    res.sendStatus(500).json(err.stack);
  }
};

const selectDate = "SELECT TO_CHAR(date, 'DD-MM-YYYY') as date, COUNT (date) FROM pomodoros WHERE userID = ($1) ";

export const handleGetAllStats = async (login: string, res: Response<StatsSearchResult>) => {
  const sql = `${selectDate} GROUP BY date ORDER BY date DESC`;

  try {
    const queryResult: QueryResult = await client.query(sql, [login]);
    res.json({ result: queryResult.rows });
  } catch (err) {
    console.log(`handleGetAllPomodorosByDate${err.stack}`);
    res.sendStatus(500).json(err.stack);
  }
};

export const getStatsFrom = async (req: Request, res: Response<StatsSearchResult>) => {
  const login = req.user.login;
  const { from } = req.params;
  const sql = `${selectDate} AND DATE >= ($2) GROUP BY date ORDER BY date DESC`;

  try {
    const queryResult = await client.query(sql, [login, from]);
    res.json({ result: queryResult.rows });
  } catch (err) {
    console.log(`handleGetPomodorosInPeriod${err.stack}`);
    res.sendStatus(500).json(err.stack);
  }
};

export const getStatsInGivenPeriod = async (req: Request, res: Response<StatsSearchResult>) => {
  const login = req.user.login;
  const { from, to } = req.params;
  const sql = `${selectDate} AND DATE BETWEEN ($2) AND ($3) GROUP BY date ORDER BY date DESC`;

  try {
    const queryResult = await client.query(sql, [login, from, to]);
    res.json({ result: queryResult.rows });
  } catch (err) {
    console.log(`handleGetPomodorosInPeriod${err.stack}`);
    res.sendStatus(500).json(err.stack);
  }
};
