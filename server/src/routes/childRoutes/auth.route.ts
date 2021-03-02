import express from 'express';
import { handlePostLogin, handleRegister } from '../../services/authService/auth.service';

const router = express.Router();

router.post('/register', handleRegister);

router.post('/login', handlePostLogin);

export default router;
