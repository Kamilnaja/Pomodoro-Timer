import { NextFunction } from 'express';
import { Response } from 'express-serve-static-core';
import StatsSearchResult from '../../../types/statisticsInterfaces';
import client from '../db/db';
import { Request } from '../models/auth/request.interface';

export const handleAddPomodoro = async (req: Request<never>, res: Response<Error | void, number>) => {
  const sql = 'INSERT INTO pomodoros (userID, date) VALUES ($1, $2)';

  const values = [req.user.id, new Date()];
  try {
    await client.query(sql, values);
    res.json();
  } catch (err) {
    console.log(err.stack);
    res.sendStatus(500).json(err.stack);
  }
};

const selectDate = "SELECT TO_CHAR(date, 'DD-MM-YYYY') as date, COUNT (date) FROM pomodoros WHERE userID = ($1)";
const groupAndOrder = 'GROUP BY date ORDER BY date DESC';

export const getStatsInGivenMonth = async (req: Request<{}>, res: Response<StatsSearchResult>, next: NextFunction) => {
  const userId = req.user.id;

  let { year, month } = req.params;

  if (!isYearCorrect(year)) {
    console.log('error');
    setError('year', year, next);
  } else if (!isMonthCorrect(month)) {
    setError('month', month, next);
  } else {
    month = (Number(month) + 1) as any;
    month.toString().length === 1 ? (month = `${0}${month}`) : month;
    await searchResultsInDb(userId.toString(), year + '-' + month, res);
  }
};

const searchResultsInDb = async (userId: string, date: string, res: Response<StatsSearchResult>) => {
  const sql = `${selectDate} AND TO_CHAR(date, 'YYYY-MM') = ($2) ${groupAndOrder}`;
  try {
    const queryResult = await client.query(sql, [userId.toString(), date]);
    res.json({ result: queryResult.rows });
  } catch (err) {
    console.log(`err fetching getStatsInGivenMonth ${err}`);
    res.sendStatus(500).json(err.stack);
  }
};

const setError = (value: 'year' | 'month', field: string, next: NextFunction) => {
  const info = `Wrong ${value} ${field}`;
  console.log(info);
  next(info); // todo - add error handler
};

const isYearCorrect = (year: string): boolean => Number(year) >= 2020;
const isMonthCorrect = (month: string): boolean => Number(month) >= 0 && Number(month) < 13;
