import { NextFunction } from 'express';
import { Response } from 'express-serve-static-core';
import { QueryResult } from 'pg';
import { Request } from '../../auth/models/request.interface';
import { getTagsFromDb } from '../queries/tag.query';

export const handleGetTags = async (req: Request<any>, res: Response<any>, next: NextFunction) => {
  const { id } = req.user;

  try {
    const queryResult: QueryResult = await getTagsFromDb(id);
    res.json({
      result: queryResult.rows,
    });
  } catch (err) {
    next(err);
  }
};
