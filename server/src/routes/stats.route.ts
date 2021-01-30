import express, { NextFunction, Router } from 'express';
import { Response } from 'express-serve-static-core';
import StatsSearchResult from '../../../types/statistics.interfaces';
import { Request } from '../models/auth/request.interface';
import { authenticateJWT } from '../services/auth.service';
import { handleAddPomodoro, handleGetAllStats, getStatsInGivenMonth } from '../services/stats.service';

const router: Router = express.Router();

// get number of all pomodoros
router
  .route('/')
  .post(authenticateJWT, (req: any, res) => handleAddPomodoro(res, req.user.login)) // todo - fix this route
  .get(authenticateJWT, (req: Request, res: Response<StatsSearchResult>) => handleGetAllStats(req.user.login, res));

router
  .route('/:date')
  .get(authenticateJWT, (req: Request, res: Response<StatsSearchResult>, next: NextFunction) =>
    getStatsInGivenMonth(req, res, next),
  );

// router
// .route('/:year/:month')
// .get(authenticateJWT, (req: Request, res: Response<StatsSearchResult>) => getStatsInGivenYear(req, res));

export default router;
