import express from 'express';
import { handlePost, handleGet } from '../services/service';
const router = express.Router();

// add new pomodoro
router.post('/pomodoros', (req, res) => {
  handlePost(res);
});

// get number of pomodoros
router.get('/pomodoros', (req, res) => {
  handleGet(res);
});

router.use(function (req, res) {
  res.status(404);
});

export default router;
