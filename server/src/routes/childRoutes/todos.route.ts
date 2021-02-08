import express, { Router } from 'express';
import { authenticateJWT } from '../../services/auth.service';
import { getTodos, handleAddTodo, handleEditTodo } from '../../services/todos.service';

const router: Router = express.Router();

// all tasks // post new task
router.route('/').get(authenticateJWT, getTodos).post(authenticateJWT, handleAddTodo);
// update task
router.route('/:id').put(authenticateJWT, handleEditTodo);
// todo - maybe not necessary
// get subtasks // post new subtasks
// router.route('/:id/subtask').get(authenticateJWT, handleGetSubtasks).post(authenticateJWT, handleAddSubtask);

export default router;
