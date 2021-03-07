import { NextFunction } from 'express';
import { Response } from 'express-serve-static-core';
import { QueryConfig, QueryResult } from 'pg';
import { StatsSearchResult, Tag } from '../../../../../types/statisticsInterfaces';
import { pool } from '../../../db/client';
import { Request } from '../../auth/models/request.interface';
import { isDateError, normalizeDay, normalizeMonth } from '../../../utils/service.util';
import { setError, shouldShowNextPeriod, shouldShowPreviousPeriod } from './stats.serviceHelpers';

export const handleAddPomodoro = async (req: Request<Tag>, res: Response<Error | {}>, next: NextFunction) => {
  const { tagId } = req.body;
  const query: QueryConfig = {
    text: 'INSERT INTO pomodoros (tag_id, user_id) VALUES ($1, $2)',
    values: [tagId, req.user.id],
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

  const { year, month } = req.params;

  if (isDateError(year, month)) {
    console.log('error');
    setError('error', next);
  } else {
    await getResultsFromDb(userId, `${year}-${normalizeMonth(Number(month))}`, 'YYYY-MM', res, next);
  }
};

export const getStatsInGivenDay = async (req: Request<{}>, res: Response<StatsSearchResult>, next: NextFunction) => {
  const userId = req.user.id;
  let { year, month, day } = req.params;

  if (isDateError(year, month, day)) {
    console.log('error');
    setError('error', next);
  } else {
    day = normalizeDay(day);
    await getResultsFromDb(userId, `${year}-${normalizeMonth(Number(month))}-${day}`, 'YYYY-MM-DD', res, next);
  }
};

const getResultsFromDb = async (
  userId: string,
  date: string,
  dateFormat: string,
  res: Response<StatsSearchResult>,
  next: NextFunction,
) => {
  // todo - do not compare with to_char
  const query: QueryConfig = {
    text: `SELECT date(pomodoros.created_at), users.date_created,
    COUNT (created_at) 
    FROM pomodoros 
    INNER JOIN users ON pomodoros.user_id = users.id
    WHERE user_id = ($1) AND TO_CHAR(created_at, ($2)) = ($3)
    GROUP BY date(created_at), users.date_created 
    ORDER BY date(created_at) DESC`,
    values: [userId, dateFormat, date],
  };

  try {
    const queryResult: QueryResult = await pool.query(query);
    const today = new Date();
    const searchedYear = Number(date.split('-')[0]);
    const searchedMonth = Number(date.split('-')[1]);
    let dateCreated: Date;

    if (queryResult.rowCount) {
      dateCreated = queryResult.rows[0].date_created;
    } else {
      // search by id once more on users table
      dateCreated = await searchDateCreatedInDb(userId, dateCreated, next);
    }
    res.json({
      pomodoros: queryResult.rows.map(({ date, count }) => ({ date, count })),
      hasNextPeriod: shouldShowNextPeriod(today, searchedYear, searchedMonth),
      hasPreviousPeriod: shouldShowPreviousPeriod(dateCreated, searchedYear, searchedMonth),
    });
  } catch (err) {
    console.log(`err when fetching stats: ${err}`);
    next(err);
  }
};

const searchDateCreatedInDb = async (userId: string, dateCreated: Date, next: NextFunction) => {
  const query: QueryConfig = {
    text: `SELECT date_created FROM users WHERE id = ($1)`,
    values: [userId],
  };
  try {
    const queryResult: QueryResult = await pool.query(query);
    dateCreated = queryResult.rows[0].date_created;
  } catch (err) {
    console.log(`err when fetching stats: ${err}`);
    next(err);
  }
  return dateCreated;
};

export const getAllStatsByMonth = async (req: Request<any>, res: Response, next: NextFunction) => {
  const userId = req.user.id;

  const query: QueryConfig = {
    text: `
      SELECT tags.text "tagText"
      FROM pomodoros 
      LEFT OUTER JOIN tags ON pomodoros.tag_id = tags.id
      WHERE user_id = ($1) AND TO_CHAR(created_at, ($2)) = ($3)`,
    values: [userId],
  };

  try {
    const queryResult: QueryResult = await pool.query(query);
    res.json({
      result: queryResult.rows,
    });
  } catch (err) {
    console.log(`err when fetching all stats ${err}`);
  }
};
