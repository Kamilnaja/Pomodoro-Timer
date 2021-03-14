import express from 'express';
import { handlePostLogin, handleRegister } from '../controllers/auth.controller';

const authRouter = express.Router();

authRouter.post('/register', handleRegister);

authRouter.post('/login', handlePostLogin);

export { authRouter };
