import express, { Router } from 'express';
import authRouter from './childRoutes/auth.route';
import statsRouter from './childRoutes/stats.route';
import todosRouter from './childRoutes/todos.route';

const router: Router = express.Router();

router.use('/stats', statsRouter).use('/auth', authRouter).use('/todos', todosRouter);

export default router;
