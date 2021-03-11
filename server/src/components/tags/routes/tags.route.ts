import express, { Router } from 'express';
import { authenticateJWT } from '../../auth/controllers/auth.controller';
import { handleAddTag, handleGetTags } from '../controllers/tags.controller';

const router: Router = express.Router();
router.route('/').get(authenticateJWT, handleGetTags).post(authenticateJWT, handleAddTag);

export default router;
