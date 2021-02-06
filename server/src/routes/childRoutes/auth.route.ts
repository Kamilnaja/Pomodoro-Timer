import express from 'express';
import { handlePostLogin, handleRegister } from '../../services/auth.service';

const router = express.Router();

// Register Handle
router.post('/register', handleRegister);

router.post('/login', handlePostLogin);

export default router;
