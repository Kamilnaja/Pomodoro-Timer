import { NextFunction } from 'express';
import { Response } from 'express-serve-static-core';
import { QueryResult } from 'pg';
import { PomodorosSearchResult, StatsSearchResult } from '../../../../../types/statsInterfaces';
import { Tag } from '../../../../../types/tagsInterfaces';
import { isDateError } from '../../../utils/service.util';
import { Request } from '../../auth/models/request.interface';
import {
  getNumberOfPomodorosDoneAtDayFromDb,
  queryAllStatsByMonthFromDb,
  savePomodoroInDb,
  searchDateCreatedInDb,
} from '../services/stats.services';
import { setError, shouldShowNextPeriod, shouldShowPreviousPeriod } from './stats.helpers';

export const handleAddPomodoro = async (req: Request<Tag>, res: Response<Error | {}>, next: NextFunction) => {
  const tag = req.body;

  if (!tag.id) {
    tag.id = '1';
  }

  try {
    await savePomodoroInDb(req.user.id);
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
        dateCreated = await searchDateCreatedInDb(userId);
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

export const getAllStatsByMonth = async (
  req: Request<any>,
  res: Response<PomodorosSearchResult>,
  next: NextFunction,
) => {
  const userId = req.user.id;
  const { year, month } = req.params;

  if (isDateError(year, month)) {
    console.log(`error`);
    setError(next, year, month);
  } else {
    try {
      const date = new Date(Number(year), Number(month));
      const queryResult: QueryResult = await queryAllStatsByMonthFromDb(userId, 'month', date);
      console.log(queryResult);
      const dateCreated: Date = await searchDateCreatedInDb(userId);

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
