import express, { Router } from 'express';
import { authenticateJWT } from '../../auth/controllers/auth.controller';
import {
  getAllStatsByMonth,
  getStatsInGivenDay,
  getStatsInGivenMonth,
  handleAddPomodoro,
} from '../controllers/stats.controller';

const statsRouter: Router = express.Router();

statsRouter.route('/').post(authenticateJWT, handleAddPomodoro);

statsRouter.route('/tags/:year/:month').get(authenticateJWT, getAllStatsByMonth);

statsRouter.route('/:year/:month').get(authenticateJWT, getStatsInGivenMonth);

statsRouter.route('/:year/:month/:day').get(authenticateJWT, getStatsInGivenDay);

export { statsRouter };
