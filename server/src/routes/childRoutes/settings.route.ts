import express, { Router } from 'express';
import { authenticateJWT } from '../../services/authService/auth.service';
import { handleGetSettings, handlePostSettings } from '../../services/settingsService/settings.service';

const router: Router = express.Router();
router.route('/').get(authenticateJWT, handleGetSettings).put(authenticateJWT, handlePostSettings);

export default router;
