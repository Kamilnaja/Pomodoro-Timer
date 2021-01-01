import express from 'express';
import { handleAddPomodoro, handleGetTodaysPomodoros } from '../services/pomodoro.service';
import authRouter from './auth.route';
import statsRouter from './stats.route';

const router = express.Router();

router.use('/stats', statsRouter);
router.use('/auth', authRouter);

export default router;
