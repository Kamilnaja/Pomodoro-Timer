import express from "express";
import { handleAddPomodoro, handleGetAllPomodoros, handleGetTodaysPomodoros } from "../services/stats.service";
import { authenticateJWT } from "./auth.route";
import { Login } from "../../../types/interfaces";

const router = express.Router();

// get number of all pomodoros
router
  .route("/pomodoros")
  .get(authenticateJWT, (req: Login, res: any) => {
    handleGetAllPomodoros(res);
  })
  .post(authenticateJWT, (req, res) => {
    handleAddPomodoro(res);
  });

// get number of pomodoros done today
// pomodoros since day ?
router.route("/pomodoros_done_today").get(authenticateJWT, (req, res) => {
  handleGetTodaysPomodoros(res);
});

export default router;
