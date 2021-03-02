import express, { Router } from 'express';
import { authenticateJWT } from '../../services/authService/auth.service';
import { getStatsInGivenDay, getStatsInGivenMonth, handleAddPomodoro } from '../../services/statsService/stats.service';

const router: Router = express.Router();

router.route('/').post(authenticateJWT, handleAddPomodoro);

router.route('/:year/:month').get(authenticateJWT, getStatsInGivenMonth);

router.route('/:year/:month/:day').get(authenticateJWT, getStatsInGivenDay);

export default router;
