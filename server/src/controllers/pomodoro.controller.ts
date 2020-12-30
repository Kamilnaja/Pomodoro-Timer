import express from 'express';
import { handleAddPomodoro, handleGetTodaysPomodoros } from '../services/service';
import passport from '../auth/auth';

const router = express.Router();

// add new pomodoro
router.post('/pomodoros', (req, res) => {
  handleAddPomodoro(res);
});

// get number of pomodoros done today
router.get('/pomodoros_done_today', (req, res) => {
  handleGetTodaysPomodoros(res);
});

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
router.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

router.use(function (req, res) {
  res.status(404);
});

export default router;
