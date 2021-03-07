import { NextFunction } from 'express';
import { Response } from 'express-serve-static-core';
import { QueryConfig, QueryResult } from 'pg';
import { StatsSearchResult, Tag } from '../../../../../types/statisticsInterfaces';
import { pool } from '../../../db/client';
import { isDateError } from '../../../utils/service.util';
import { Request } from '../../auth/models/request.interface';
import { getFromDb, savePomodoroInDb, searchDateCreatedInDb } from '../queries/stats.queries';
import { setError, shouldShowNextPeriod, shouldShowPreviousPeriod } from './stats.serviceHelpers';

export const handleAddPomodoro = async (req: Request<Tag>, res: Response<Error | {}>, next: NextFunction) => {
  const { tagId } = req.body;

  try {
    await savePomodoroInDb(req.user.id, tagId);
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
    const date = new Date(Number(year), Number(month));

    try {
      const queryResult: QueryResult = await getFromDb(userId, 'month', date);
      const today = new Date();
      const searchedYear = date.getFullYear();
      const searchedMonth = date.getMonth();
      const dateCreated: Date = await getDateCreated(queryResult, userId);
      res.json({
        pomodoros: queryResult.rows.map(({ date, count }) => ({ date, count })),
        hasNextPeriod: shouldShowNextPeriod(today, searchedYear, searchedMonth + 1),
        hasPreviousPeriod: shouldShowPreviousPeriod(dateCreated, searchedYear, searchedMonth + 1),
      });
    } catch (err) {
      console.log(`err when fetching stats: ${err}`);
      next(err);
    }
  }
};

export const getStatsInGivenDay = async (req: Request<{}>, res: Response<StatsSearchResult>, next: NextFunction) => {
  const userId = req.user.id;
  const { year, month, day } = req.params;
  const date = new Date(Number(year), Number(month), Number(day));

  if (isDateError(year, month, day)) {
    console.log('error');
    next('date err');
  } else {
    try {
      const queryResult: QueryResult = await getFromDb(userId, 'day', date);
      res.json({
        pomodoros: queryResult.rows.map(({ date, count }) => ({ date, count })),
        hasNextPeriod: false,
        hasPreviousPeriod: false,
      });
    } catch (err) {
      console.log(`err when fetching stats: ${err}`);
      next(err);
    }
  }
};

export const getAllStatsByMonth = async (req: Request<any>, res: Response, next: NextFunction) => {
  const userId = req.user.id;

  const query: QueryConfig = {
    text: `
      SELECT tags.text "tagText"
      FROM pomodoros 
      LEFT OUTER JOIN tags ON pomodoros.tag_id = tags.id
      WHERE user_id = ($1) 
      AND TO_CHAR(created_at, ($2)) = ($3)`, // todo- fixme
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

export const getDateCreated = async (queryResult: QueryResult<any>, userId: string) => {
  let dateCreated: Date;

  if (queryResult.rowCount) {
    dateCreated = queryResult.rows[0].date_created;
  } else {
    // search by id once more on users table
    dateCreated = await searchDateCreatedInDb(userId);
  }
  return dateCreated;
};
