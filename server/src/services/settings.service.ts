import { NextFunction } from 'express';
import client from '../db/db';
import { Request } from '../models/auth/request.interface';
import { Settings } from '../../../types/settingsInterface';
import { Response } from 'express-serve-static-core';
import pool from '../db/db';

export const handleGetSettings = async (req: Request<{}>, res: Response, next: NextFunction) => {
  console.log('wchodzi ');

  const userId = req.user.id;
  await searchSettingsInDb(userId.toString(), res, next);
};

const searchSettingsInDb = async (userId: string, res: Response<Settings>, next: NextFunction) => {
  const sql = `SELECT 
    is_cookie_consent_accepted "isCookieConsentAccepted", 
    is_sound_enabled "isSoundEnabled" 
    FROM settings 
    WHERE user_id = ($1)`;
  try {
    const queryResult = await client.query(sql, [userId.toString()]);
    if (queryResult.rowCount === 0) {
      console.log('sending default values for settings');
      await initSettings(userId, res, next);
    } else {
      console.log('sending results from db');
      res.json(queryResult.rows[0]);
    }
  } catch (err) {
    console.log(`error when searching settings in dd ${err}`);
    next(err);
  }
};

export const initSettings = async (userId: string, res: Response<Settings>, next: NextFunction) => {
  const sql = `INSERT INTO settings (user_id) values ($1)`;
  try {
    await pool.query(sql, [userId]);
    res.json({
      isCookieConsentAccepted: false,
      isSoundEnabled: true,
    });
  } catch (err: any) {
    console.log('error while saving default user settings');
    next(err);
  }
};

export const handlePostSettings = (req: Request<{}>, res: Response, next: NextFunction) => {};
