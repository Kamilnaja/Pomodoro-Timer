import express, { Router } from 'express';
import { authenticateJWT } from '../../services/authService/auth.service';
import { getTodos, handleAddTodo } from '../../services/todosService/todos.service';

const router: Router = express.Router();

// all tasks // post new task
router.route('/').get(authenticateJWT, getTodos).post(authenticateJWT, handleAddTodo);

export default router;
