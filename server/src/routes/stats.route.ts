import express, { Router } from "express";
import StatsSearchResult from "../../../types/statistics.interfaces";
import { Request } from "../models/auth/request.interface";
import { authenticateJWT } from "../services/auth.service";
import { getStatsBetween, getStatsFrom, getTodayStats, handleAddPomodoro, handleGetAllPomodoros } from "../services/stats.service";
import { Response } from "express-serve-static-core";

const router: Router = express.Router();

// get number of all pomodoros
router
  .route("/pomodoros")
  .get(authenticateJWT, (req: Request, res) => {
    handleGetAllPomodoros(res, req.user.login);
  })
  .post(authenticateJWT, (req: any, res) => handleAddPomodoro(res, req.user.login));

router.route("/").get(authenticateJWT, (req: Request, res: Response<StatsSearchResult>) => getTodayStats(req, res));

router.route("/:from").get(authenticateJWT, (req: Request, res: Response<StatsSearchResult>) => getStatsFrom(req, res));

router.route("/:from/:to").get(authenticateJWT, (req: Request, res: Response<StatsSearchResult>) => getStatsBetween(req, res));

export default router;
