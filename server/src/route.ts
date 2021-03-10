import express, { Router } from 'express';
import authRouter from './components/auth/routes/auth.route';
import statsRouter from './components/stats/routes/stats.route';
import settingsRouter from './components/settings/routes/settings.route';
import tagsRouter from './components/tags/routes/tags.route';

const router: Router = express.Router();

router.use('/stats', statsRouter).use('/auth', authRouter).use('/settings', settingsRouter).use('/tags', tagsRouter);

router.get('*', (req, res) => {
  res.status(404).send('Wrong url!');
});

export default router;
