import { NextFunction } from 'express';
import client from '../db/db';

export const handleSelect = async (sql: string, req: any, res: any, next: NextFunction) => {
  const userId = req.user.id;

  try {
    const queryResult = await client.query(sql, [userId]);
    res.json({ result: queryResult.rows });
  } catch (err) {
    console.log(`error while get request:  ${err}`);
    next(err);
  }
};

export const normalizeMonth = (month: string): string => {
  month = (Number(month) + 1) as any;
  return month.toString().length === 1 ? (month = `${0}${month}`) : month;
};

export const isDateError = (year: string, month: string, day?: string): boolean => {
  if (day) {
    return !isYearCorrect(year) || !isMonthCorrect(month) || !isDayCorrect(day);
  } else {
    return !isYearCorrect(year) || !isMonthCorrect(month);
  }
};

export const isYearCorrect = (year: string): boolean => Number(year) >= 2020;
export const isMonthCorrect = (month: string): boolean => Number(month) >= 0 && Number(month) <= 12;
export const isDayCorrect = (day: string): boolean => Number(day) >= 0 && Number(day) < 31;
