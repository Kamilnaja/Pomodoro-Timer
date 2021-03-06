import express, { Router } from 'express';
import authRouter from './childRoutes/auth.route';
import statsRouter from './childRoutes/stats.route';
import settingsRouter from './childRoutes/settings.route';

const router: Router = express.Router();

router.use('/stats', statsRouter).use('/auth', authRouter).use('/settings', settingsRouter);

router.get('*', (req, res) => {
  res.status(404).send('Wrong url!');
});

export default router;
