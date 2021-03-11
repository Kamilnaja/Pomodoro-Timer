import express, { Router } from 'express';
import { authenticateJWT } from '../../auth/controllers/auth.controller';
import { handleGetSettings, handlePostSettings } from '../controllers/settings.controller';

const router: Router = express.Router();
router.route('/').get(authenticateJWT, handleGetSettings).put(authenticateJWT, handlePostSettings);

export default router;
