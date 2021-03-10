import express, { Router } from 'express';
import { authenticateJWT } from '../../auth/services/auth.service';
import { handleAddTag, handleGetTags } from '../services/tags.service';

const router: Router = express.Router();
router.route('/').get(authenticateJWT, handleGetTags).post(authenticateJWT, handleAddTag);

export default router;
