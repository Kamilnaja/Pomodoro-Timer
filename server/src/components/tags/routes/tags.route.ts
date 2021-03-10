import express, { Router } from 'express';
import { authenticateJWT } from '../../auth/services/auth.service';
import { handleGetTags } from '../services/tags.service';

const router: Router = express.Router();
router.route('/').get(authenticateJWT, handleGetTags);

export default router;
