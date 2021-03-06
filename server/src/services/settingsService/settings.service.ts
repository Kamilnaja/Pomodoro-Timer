import { NextFunction } from 'express';
import { Response } from 'express-serve-static-core';
import { QueryConfig, QueryResult } from 'pg';
import { Settings } from '../../../../types/settingsInterface';
import { DisplayDirection } from '../../../../web/src/settings/store/interfaces/settingsInterfaces';
import { pool } from '../../db/client';
import { Request } from '../../models/auth/request.interface';

export const handleGetSettings = async (req: Request<{}>, res: Response, next: NextFunction) => {
  const userId = req.user.id;
  await searchSettingsInDb(userId.toString(), res, next);
};

const searchSettingsInDb = async (userId: string, res: Response<Settings>, next: NextFunction) => {
  const query: QueryConfig = {
    text: `SELECT 
      is_cookie_consent_accepted "isCookieConsentAccepted", 
      is_sound_enabled "isSoundEnabled",
      display_direction "displayDirection",
      display_empty_days "displayEmptyDays"
    FROM settings 
    WHERE user_id = ($1)`,
    values: [userId.toString()],
  };

  try {
    const queryResult: QueryResult<Settings> = await pool.query(query);
    if (queryResult.rowCount === 0) {
      console.log('sending default values for settings');
      await initSettings(userId, res, next);
    } else {
      console.log('sending results from db');
      res.json(queryResult.rows[0]);
    }
  } catch (err) {
    console.log(`error when searching settings in db: ${err}`);
    next(err);
  }
};

export const initSettings = async (userId: string, res: Response<Settings>, next: NextFunction) => {
  const query: QueryConfig = { text: `INSERT INTO settings (user_id) values ($1)`, values: [userId] };

  try {
    await pool.query(query);
    res.json({
      isCookieConsentAccepted: false,
      isSoundEnabled: true,
      displayDirection: DisplayDirection.DESC,
      displayEmptyDays: false,
    });
  } catch (err: any) {
    console.log('error while saving default user settings');
    next(err);
  }
};

export const handlePostSettings = async (req: Request<Settings>, res: Response, next: NextFunction) => {
  const { isCookieConsentAccepted, isSoundEnabled, displayDirection, displayEmptyDays } = req.body;
  const query: QueryConfig = {
    text: `UPDATE settings 
           SET 
              is_cookie_consent_accepted = ($1), 
              is_sound_enabled = ($2), 
              display_direction = ($3),
              display_empty_days = ($4)
           WHERE user_id = ($5)`,
    values: [isCookieConsentAccepted, isSoundEnabled, displayDirection, displayEmptyDays, req.user.id],
  };

  try {
    await pool.query(query);
    res.status(200).send({});
  } catch (err: any) {
    console.log('error while saving settings');
    next(err);
  }
};
