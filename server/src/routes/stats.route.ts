import express from "express";
import { handleAddPomodoro, handleGetAllPomodoros, handleGetTodaysPomodoros } from "../services/stats.service";

const router = express.Router();

// get number of all pomodoros
router.get("/pomodoros", (req, res) => {
  handleGetAllPomodoros(res);
});

// add new pomodoro
router.post("/pomodoros", (req, res) => {
  handleAddPomodoro(res);
});

// get number of pomodoros done today
router.get("/pomodoros_done_today", (req, res) => {
  handleGetTodaysPomodoros(res);
});

export default router;
