import express from 'express';
import { handleAddPomodoro, handleGetTodaysPomodoros } from '../services/pomodoro.service';
import authRouter from './auth.route';

const router = express.Router();

// add new pomodoro
router.post('/pomodoros', (req, res) => {
  handleAddPomodoro(res);
});

// get number of pomodoros done today
router.get('/pomodoros_done_today', (req, res) => {
  handleGetTodaysPomodoros(res);
});

export default router;
