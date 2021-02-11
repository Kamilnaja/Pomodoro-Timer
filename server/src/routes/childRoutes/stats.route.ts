import express, { Router } from 'express';
import { authenticateJWT } from '../../services/auth.service';
import { getStatsInGivenDay, getStatsInGivenMonth, handleAddPomodoro } from '../../services/stats.service';

const router: Router = express.Router();

// get number of all pomodoros
router.route('/').post(authenticateJWT, handleAddPomodoro);

router.route('/:year/:month').get(authenticateJWT, getStatsInGivenMonth);

router.route('/:year/:month/:day').get(authenticateJWT, getStatsInGivenDay);

export default router;
