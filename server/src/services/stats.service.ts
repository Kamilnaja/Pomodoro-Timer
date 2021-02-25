import { NextFunction } from 'express';
import { Response } from 'express-serve-static-core';
import { QueryConfig } from 'pg';
import { StatsSearchResult } from '../../../types/statisticsInterfaces';
import { pool } from '../db/client';
import { Request } from '../models/auth/request.interface';
import { isDateError, normalizeMonth } from '../utils/service.util';

export const handleAddPomodoro = async (req: Request<{}>, res: Response<Error | {}>, next: NextFunction) => {
  const query: QueryConfig = {
    text: 'INSERT INTO pomodoros (user_id, date) VALUES ($1, $2)',
    values: [req.user.id, new Date()],
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
    text: `SELECT date(pomodoros.date), 
    COUNT (date) 
    FROM pomodoros 
    INNER JOIN users on pomodoros.user_id = users.id
    WHERE user_id = ($1) AND TO_CHAR(date, ($2)) = ($3)
    GROUP BY date(date), users.date_created ORDER BY date(date) DESC`,
    values: [userId.toString(), dateFormat, date],
  };

  try {
    const queryResult = await pool.query(query);

    res.json({
      pomodoros: queryResult.rows,
      hasNextPeriod: true,
      hasPreviousPeriod: true,
    });
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
