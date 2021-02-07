import express, { Router } from 'express';
import { authenticateJWT } from '../../services/auth.service';
import { getTodos, handleAddTodo, handleEditTodo } from '../../services/todos.service';

const router: Router = express.Router();

router.route('/').get(authenticateJWT, getTodos);
router.route('/').post(authenticateJWT, handleAddTodo);
router.route('/:id').put(authenticateJWT, handleEditTodo);

export default router;
