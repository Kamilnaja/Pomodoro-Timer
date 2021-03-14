import express, { Router } from 'express';
import { authenticateJWT } from '../../auth/controllers/auth.controller';
import { handleAddTag, handleGetTags } from '../controllers/tags.controller';

const tagsRouter: Router = express.Router();
tagsRouter.route('/').get(authenticateJWT, handleGetTags).post(authenticateJWT, handleAddTag);

export { tagsRouter };
