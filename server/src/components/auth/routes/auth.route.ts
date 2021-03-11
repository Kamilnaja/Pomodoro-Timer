import express from 'express';
import { handlePostLogin, handleRegister } from '../controllers/auth.controller';

const router = express.Router();

router.post('/register', handleRegister);

router.post('/login', handlePostLogin);

export default router;
