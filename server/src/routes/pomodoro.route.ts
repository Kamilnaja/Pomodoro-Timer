import express from 'express';
import { handleAddPomodoro, handleGetTodaysPomodoros } from '../services/pomodoro.service';

const router = express.Router();

// add new pomodoro
router.post('/pomodoros', (req, res) => {
  handleAddPomodoro(res);
});

// get number of pomodoros done today
router.get('/pomodoros_done_today', (req, res) => {
  handleGetTodaysPomodoros(res);
});

router.use(function (req, res) {
  res.status(404);
});

export default router;
