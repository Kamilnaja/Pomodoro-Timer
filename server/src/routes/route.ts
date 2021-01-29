import express, { Router } from 'express';
import { router as authRouter } from './auth.route';
import statsRouter from './stats.route';

const router: Router = express.Router();

router.use('/stats', statsRouter).use('/auth', authRouter);

export default router;
