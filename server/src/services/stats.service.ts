import { NextFunction } from 'express';
import { Response } from 'express-serve-static-core';
import { QueryResult } from 'pg';
import StatsSearchResult from '../../../types/statistics.interfaces';
import client from '../db/db';
import { Request } from '../models/auth/request.interface';

export const handleAddPomodoro = async (res: Response<Error | void, number>, login: string) => {
  const sql = 'INSERT INTO pomodoros (userID, date) VALUES ($1, $2)';

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
const groupAndOrder = 'GROUP BY date ORDER BY date DESC';

export const handleGetAllStats = async (login: string, res: Response<StatsSearchResult>) => {
  const sql = `${selectDate} ${groupAndOrder}`;

  try {
    const queryResult: QueryResult = await client.query(sql, [login]);
    res.json({ result: queryResult.rows });
  } catch (err) {
    console.log(`handleGetAllPomodorosByDate${err.stack}`);
    res.sendStatus(500).json(err.stack);
  }
};

export const getStatsInGivenMonth = async (req: Request, res: Response<StatsSearchResult>, next: NextFunction) => {
  const login = req.user.login;
  const { date } = req.params;
  const [year, month] = req.params.date.split('-').map((item: string) => Number(item));

  if (!isYearCorrect(year)) {
    console.log('error');

    setError('year', year, next);
  } else if (!isMonthCorrect(month)) {
    setError('month', month, next);
  } else {
    await searchResultsInDb(login, date, res);
  }
};

const searchResultsInDb = async (login: string, date: string, res: Response<StatsSearchResult, number>) => {
  const sql = `${selectDate} and to_char(date, 'YYYY-MM') = ($2) ${groupAndOrder}`;

  try {
    const queryResult = await client.query(sql, [login, date]);
    res.json({ result: queryResult.rows });
  } catch (err) {
    console.log(`err fetching getStatsInGivenMonth ${err}`);
    res.sendStatus(500).json(err.stack);
  }
};

const setError = (value: 'year' | 'month', month: number, next: NextFunction) => {
  const info = `Wrong ${value} ${month}`;
  console.log(info);
  next(info); // todo - add error handler
};

const isYearCorrect = (year: number): boolean => year >= 2020;
const isMonthCorrect = (month: number): boolean => month > 0 && month < 13;
