import express, { Router } from 'express';
import { authenticateJWT } from '../../auth/controllers/auth.controller';
import { getTodos, handleAddTodo } from '../controllers/todos.controller';

const router: Router = express.Router();

// all tasks // post new task
router.route('/').get(authenticateJWT, getTodos).post(authenticateJWT, handleAddTodo);

export default router;
