import express, { Router } from 'express';
import { authenticateJWT } from '../../auth/controllers/auth.controller';
import {
  getAllStatsByMonth,
  getStatsInGivenDay,
  getStatsInGivenMonth,
  handleAddPomodoro,
} from '../controllers/stats.controller';

const router: Router = express.Router();

router.route('/').post(authenticateJWT, handleAddPomodoro);

router.route('/tags/:year/:month').get(authenticateJWT, getAllStatsByMonth);

router.route('/:year/:month').get(authenticateJWT, getStatsInGivenMonth);

router.route('/:year/:month/:day').get(authenticateJWT, getStatsInGivenDay);

export default router;
