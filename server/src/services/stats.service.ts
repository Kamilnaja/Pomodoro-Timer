import { NextFunction } from 'express';
import { Response } from 'express-serve-static-core';
import { QueryConfig, QueryResult } from 'pg';
import { StatsSearchResult } from '../../../types/statisticsInterfaces';
import { pool } from '../db/client';
import { Request } from '../models/auth/request.interface';
import { isDateError, normalizeMonth } from '../utils/service.util';

export const handleAddPomodoro = async (req: Request<{}>, res: Response<Error | {}>, next: NextFunction) => {
  const query: QueryConfig = {
    text: 'INSERT INTO pomodoros (user_id) VALUES ($1)',
    values: [req.user.id],
  };

  try {
    await pool.query(query);
    res.json({});
  } catch (err) {
    console.log(err.stack);
    next(err);
  }
};

export const getStatsInGivenMonth = async (req: Request<{}>, res: Response<StatsSearchResult>, next: NextFunction) => {
  const userId = req.user.id;

  let { year, month } = req.params;

  if (isDateError(year, month)) {
    console.log('error');
    setError('error', next);
  } else {
    month = normalizeMonth(month);
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
    month = normalizeMonth(month);
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
  const query: QueryConfig = {
    text: `SELECT date(pomodoros.created_at), users.date_created,
    COUNT (created_at) 
    FROM pomodoros 
    INNER JOIN users on pomodoros.user_id = users.id
    WHERE user_id = ($1) AND TO_CHAR(created_at, ($2)) = ($3)
    GROUP BY date(created_at), users.date_created 
    ORDER BY date(created_at) DESC`,
    values: [userId.toString(), dateFormat, date],
  };

  try {
    const queryResult: QueryResult = await pool.query(query);
    const today = new Date();
    const dateCreated: Date = queryResult.rows[0].date_created;

    const searchedYear = Number(date.split('-')[0]);
    const searchedMonth = Number(date.split('-')[1]);

    const shouldShowNextPeriod = (): boolean =>
      today.getFullYear() <= searchedYear && today.getMonth() <= searchedMonth;

    const shouldShowPreviousPeriod = (): boolean =>
      dateCreated.getFullYear() >= searchedYear && dateCreated.getMonth() + 1 >= searchedMonth;

    res.json({
      pomodoros: queryResult.rows.map(({ date, count }) => ({ date, count })),
      hasNextPeriod: shouldShowNextPeriod(),
      hasPreviousPeriod: shouldShowPreviousPeriod(),
    });
  } catch (err) {
    console.log(`err when fetching stats: ${err}`);
    next(err);
  }
};

const setError = (field: string, next: NextFunction) => {
  const info = `Wrong ${field}`;
  console.log(info);
  next(info);
};
