import { NextFunction } from 'express';
import { Response } from 'express-serve-static-core';
import { QueryResult } from 'pg';
import { Tag } from '../../../../../types/tagsInterfaces';
import { Request } from '../../auth/models/request.interface';
import { getTagsFromDb, insertTagToDb } from '../services/tags.service';

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

export const handleAddTag = async (req: Request<Tag>, res: Response<any>, next: NextFunction) => {
  const { id } = req.user;
  const tag = req.body;
  try {
    await insertTagToDb(id, tag);
    res.status(201).json({});
  } catch (err) {
    next(err);
  }
};
