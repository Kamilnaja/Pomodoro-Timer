import express, { Router } from "express";
import { Response } from "express-serve-static-core";
import StatsSearchResult from "../../../types/statistics.interfaces";
import { Request } from "../models/auth/request.interface";
import { authenticateJWT } from "../services/auth.service";
import { getStatsInGivenPeriod, getStatsFrom, handleAddPomodoro, handleGetAllStats } from "../services/stats.service";

const router: Router = express.Router();

// get number of all pomodoros
router
  .route("/")
  .post(authenticateJWT, (req: any, res) => handleAddPomodoro(res, req.user.login))
  .get(authenticateJWT, (req: Request, res: Response<StatsSearchResult>) => handleGetAllStats(req.user.login, res));

router.route("/:from").get(authenticateJWT, (req: Request, res: Response<StatsSearchResult>) => getStatsFrom(req, res));

router.route("/:from/:to").get(authenticateJWT, (req: Request, res: Response<StatsSearchResult>) => getStatsInGivenPeriod(req, res));

export default router;
