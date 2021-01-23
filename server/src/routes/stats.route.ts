import express, { Router } from "express";
import { handleAddPomodoro, handleGetAllPomodoros, handleGetAllPomodorosByDate, handleGetTodaysPomodoros } from "../services/stats.service";
import { Request } from "../models/auth/request.interface";
import { authenticateJWT } from "../services/auth.service";

const router: Router = express.Router();

// get number of all pomodoros
router
  .route("/pomodoros")
  .get(authenticateJWT, (req: Request, res) => {
    handleGetAllPomodoros(res, req.user.login);
  })
  .post(authenticateJWT, (req: any, res) => handleAddPomodoro(res, req.user.login));

// get number of pomodoros done today
// pomodoros since day ?
router.route("/pomodoros_done_today").get(authenticateJWT, (req: any, res) => handleGetTodaysPomodoros(res, req.user.login));

router.route("/all").get(authenticateJWT, (req: any, res) => handleGetAllPomodorosByDate(res, req.user.login));

export default router;
