import express, { Router } from 'express';
import { authenticateJWT } from '../services/auth.service';
import { getStatsInGivenMonth, handleAddPomodoro } from '../services/stats.service';

const router: Router = express.Router();

// get number of all pomodoros
router.route('/').post(authenticateJWT, handleAddPomodoro); // todo - fix this route

router.route('/:year/:month').get(authenticateJWT, getStatsInGivenMonth);

export default router;
