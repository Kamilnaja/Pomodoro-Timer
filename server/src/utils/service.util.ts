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
