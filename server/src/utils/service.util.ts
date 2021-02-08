import { NextFunction } from 'express';
import client from '../db/db';
import Request from '../models/auth/request.interface';

export const handleSelect = async (sql: string, req: Request<{}>, res: any, next: NextFunction) => {
  const userId = req.user.id;

  try {
    const queryResult = await client.query(sql, [userId]);
    res.json({ result: queryResult.rows });
  } catch (err) {
    console.log(`error while get request:  ${err}`);
    next(err);
  }
};
