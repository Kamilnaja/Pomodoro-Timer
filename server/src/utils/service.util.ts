import { NextFunction } from 'express';
import { pool } from '../db/client';

export const handleSelect = async (sql: string, req: any, res: any, next: NextFunction) => {
  const userId = req.user.id;

  try {
    const queryResult = await pool.query(sql, [userId]);
    res.json({ result: queryResult.rows });
  } catch (err) {
    console.log(`error while get request:  ${err}`);
    next(err);
  }
};

export const normalizeDay = (day: string): string => {
  return day.toString().length === 1 ? (day = `${0}${day}`) : day;
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
