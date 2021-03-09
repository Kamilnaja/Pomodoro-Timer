import { NextFunction } from 'express';
import { Response } from 'express-serve-static-core';
import { QueryResult } from 'pg';
import { StatsSearchResult, Tag } from '../../../../../types/statsInterfaces';
import { isDateError } from '../../../utils/service.util';
import { Request } from '../../auth/models/request.interface';
import {
  getNumberOfPomodorosDoneAtDayFromDb,
  queryGetAllStatsByMonthsFromDb,
  savePomodoroInDb,
  searchDateCreatedInDb,
} from '../queries/stats.queries';
import { setError, shouldShowNextPeriod, shouldShowPreviousPeriod } from './stats.service.helpers';

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
    setError(next, year, month);
  } else {
    try {
      const date = new Date(Number(year), Number(month));
      const queryResult: QueryResult = await getNumberOfPomodorosDoneAtDayFromDb(userId, 'month', date);
      let dateCreated: Date;

      if (queryResult.rowCount) {
        dateCreated = queryResult.rows[0].date_created;
      } else {
        dateCreated = await getDateCreated(userId);
      }

      res.json({
        pomodoros: queryResult.rows.map(({ date, count }) => ({ date, count })),
        hasNextPeriod: shouldShowNextPeriod(new Date(), date),
        hasPreviousPeriod: shouldShowPreviousPeriod(dateCreated, date),
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
    next(`date err: ${year} ${month} ${day}`);
  } else {
    try {
      const queryResult: QueryResult = await getNumberOfPomodorosDoneAtDayFromDb(userId, 'day', date);
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
  const { year, month } = req.params;

  // todo - use error fn from helpers in all places
  if (isDateError(year, month)) {
    console.log(`error`);
    setError(next, year, month);
  } else {
    try {
      const date = new Date(Number(year), Number(month));
      const queryResult: QueryResult = await queryGetAllStatsByMonthsFromDb(userId, 'month', date);
      const dateCreated: Date = await getDateCreated(userId);

      res.json({
        result: queryResult.rows,
        hasNextPeriod: shouldShowNextPeriod(new Date(), date),
        hasPreviousPeriod: shouldShowPreviousPeriod(dateCreated, date),
      });
    } catch (err) {
      console.log(`err when fetching all stats ${err}`);
      next(err);
    }
  }
};

export const getDateCreated = async (userId: string): Promise<any> => {
  return await searchDateCreatedInDb(userId);
};
