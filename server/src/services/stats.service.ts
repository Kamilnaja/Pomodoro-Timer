import { NextFunction } from 'express';
import { Response } from 'express-serve-static-core';
import StatsSearchResult from '../../../types/statisticsInterfaces';
import client from '../db/db';
import { Request } from '../models/auth/request.interface';

export const handleAddPomodoro = async (req: Request<{}>, res: Response<Error | {}, number>, next: NextFunction) => {
  const sql = 'INSERT INTO pomodoros (userID, date) VALUES ($1, $2)';

  const values = [req.user.id, new Date()];
  try {
    await client.query(sql, values);
    res.json({});
  } catch (err) {
    console.log(err.stack);
    next(err);
  }
};

const groupAndOrder = 'GROUP BY date ORDER BY date DESC';

export const getStatsInGivenMonth = async (req: Request<{}>, res: Response<StatsSearchResult>, next: NextFunction) => {
  const userId = req.user.id;

  let { year, month } = req.params;

  if (isDateError(year, month)) {
    console.log('error');
    setError('error', next);
  } else {
    month = (Number(month) + 1) as any;
    month.toString().length === 1 ? (month = `${0}${month}`) : month;
    await searchResultsInDb(userId.toString(), `${year}-${month}`, 'YYYY-MM', res, next);
  }
};

export const getStatsInGivenDay = async (req: Request<{}>, res: Response<StatsSearchResult>, next: NextFunction) => {
  const userId = req.user.id;

  let { year, month, day } = req.params;

  if (isDateError(year, month, day)) {
    console.log('error');
    setError('error', next);
  } else {
    month = (Number(month) + 1) as any;
    month.toString().length === 1 ? (month = `${0}${month}`) : month;
    await searchResultsInDb(userId.toString(), `${year}-${month}-${day}`, 'YYYY-MM-DD', res, next);
  }
};

const searchResultsInDb = async (
  userId: string,
  date: string,
  dateFormat: string,
  res: Response<StatsSearchResult>,
  next: NextFunction,
) => {
  const sql = `SELECT TO_CHAR(date, 'DD-MM-YYYY') as date, 
     COUNT (date) 
     FROM pomodoros 
     WHERE userID = ($1) AND TO_CHAR(date, ($2)) = ($3) ${groupAndOrder}`;

  try {
    const queryResult = await client.query(sql, [userId.toString(), dateFormat, date]);
    res.json({ result: queryResult.rows });
  } catch (err) {
    console.log(`err fetching getStatsInGivenMonth ${err}`);
    next(err);
  }
};

const setError = (field: string, next: NextFunction) => {
  const info = `Wrong ${field}`;
  console.log(info);
  next(info);
};

const isDateError = (year: string, month: string, day?: string): boolean => {
  if (day) {
    return !isYearCorrect(year) || !isMonthCorrect(month) || !isDayCorrect(day);
  } else {
    return !isYearCorrect(year) || !isMonthCorrect(month);
  }
};

const isYearCorrect = (year: string): boolean => Number(year) >= 2020;
const isMonthCorrect = (month: string): boolean => Number(month) >= 0 && Number(month) <= 12;
const isDayCorrect = (day: string): boolean => Number(day) >= 0 && Number(day) < 31;
