import express, { Router } from 'express';
import { authenticateJWT } from '../../auth/controllers/auth.controller';
import { handleGetSettings, handlePostSettings } from '../controllers/settings.controller';

const settingsRouter: Router = express.Router();
settingsRouter.route('/').get(authenticateJWT, handleGetSettings).put(authenticateJWT, handlePostSettings);

export { settingsRouter };
