import express, { Router } from 'express';
import { authenticateJWT } from '../../auth/services/auth.service';
import {
  getAllStatsByMonth,
  getStatsInGivenDay,
  getStatsInGivenMonth,
  handleAddPomodoro,
} from '../services/stats.service';

const router: Router = express.Router();

router.route('/').post(authenticateJWT, handleAddPomodoro);

router.route('/tags/:year/:month').get(authenticateJWT, getAllStatsByMonth);

router.route('/:year/:month').get(authenticateJWT, getStatsInGivenMonth);

router.route('/:year/:month/:day').get(authenticateJWT, getStatsInGivenDay);

export default router;
