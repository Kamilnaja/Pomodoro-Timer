import { QueryConfig, QueryResult } from 'pg';
import { PomodorosDoneInDay } from '../../../../../types/statisticsInterfaces';
import { pool } from '../../../db/client';

export const gfdb = async (
  userId: string,
  period: 'month' | 'day',
  date: Date,
): Promise<QueryResult<PomodorosDoneInDay>> => {
  const query: QueryConfig = {
    text: `
    SELECT date(pomodoros.created_at), users.date_created,
    COUNT (created_at) 
    FROM pomodoros 
    INNER JOIN users ON pomodoros.user_id = users.id
    WHERE user_id = ($1) 
    AND DATE_TRUNC('${period}', created_at) = ($2)
    GROUP BY date(created_at), users.date_created `,
    values: [userId, date],
  };
  try {
    return await pool.query(query);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const searchDateCreatedInDb = async (userId: string): Promise<Date> => {
  const query: QueryConfig = {
    text: `SELECT date_created FROM users WHERE id = ($1)`,
    values: [userId],
  };

  try {
    const queryResult: QueryResult = await pool.query(query);
    return queryResult.rows[0].date_created;
  } catch (err) {
    console.log(`err when fetching stats: ${err}`);
    return Promise.reject(err);
  }
};

export const savePomodoroInDb = async (userId: string, tagId: string): Promise<void> => {
  const query: QueryConfig = {
    text: 'INSERT INTO pomodoros (tag_id, user_id) VALUES ($1, $2)',
    values: [tagId, userId],
  };

  try {
    await pool.query(query);
  } catch (err) {
    console.error(`error ${err}`);
    return Promise.reject(err);
  }
};
