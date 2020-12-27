import express from 'express';
import { Pomodoro } from '../business/pomodoro';
import TodayStatistics from '../../../web/src/shared/store/interfaces/todayStatistics.interface';
export const router = express.Router();

// todo - naive implementation
let id = 0;
const pomodoros: Pomodoro[] = [];

// add new pomodoro
router.post('/pomodoros', (req, res) => {
  const pomodoro = new Pomodoro();
  pomodoro.setDate(new Date()).setId(String(id++));
  pomodoros.push(pomodoro);
  res.send('SUCCES');
});

// get number of pomodoros
router.get('/pomodoros', (req, res) => {
  const response: TodayStatistics = {
    quantity: pomodoros.length
  };
  res.json(response);
});
