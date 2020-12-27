import express from 'express';
import { Pomodoro } from '../business/pomodoro';
import TodayStatistics from '../../../web/src/shared/store/interfaces/todayStatistics.interface';
import db from '../db/db';
const router = express.Router();

// todo - naive implementation, fix me
const pomodoros: Pomodoro[] = [];

// add new pomodoro
router.post('/pomodoros', (req, res) => {
  const sql = 'INSERT INTO pomodoros (userID, date) VALUES (?,?)';
  const params = ['kamil naja', new Date()];

  db.run(sql, params, (err: any, result: any) => {
    if (err) {
      res.status(400).json({
        error: err.message
      });
    }
    console.log(result);
    res.json({
      message: 'success'
    });
  });
});

// get number of pomodoros
router.get('/pomodoros', (req, res) => {
  const response: TodayStatistics = {
    quantity: pomodoros.length
  };
  res.json(response);
});

router.use(function (req, res) {
  res.status(404);
});

export default router;
