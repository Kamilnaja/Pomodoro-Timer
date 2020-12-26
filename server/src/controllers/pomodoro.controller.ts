import express from 'express';
import { Pomodoro } from '../business/pomodoro';
export const router = express.Router();

// todo - naive implementation
let id = 0;
const pomodoros: Pomodoro[] = [];

router.get('/', (req, res) => {
  res.send('Hello world!');
});

// add new pomodoro
router.post('/pomodoros', (req, res) => {
  const pomodoro = new Pomodoro();
  pomodoro.setDate(new Date()).setId(String(id++));
  pomodoros.push(pomodoro);
  res.send('SUCCES');
});

// get all pomodoros
router.get('/pomodoros', (req, res) => {
  res.json(pomodoros);
});
