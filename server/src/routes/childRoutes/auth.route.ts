import bcrypt from 'bcrypt';
import express, { NextFunction } from 'express';
import { Login as LoginEnum } from '../../../../types/authInterfaces';
import { Request } from '../../models/auth/request.interface';
import { loginUser, registerUser } from '../../services/auth.service';

const router = express.Router();

interface Login {
  body: LoginEnum;
}

// Register Handle
router.post('/register', (req: Request, res, next: NextFunction) => {
  const rounds = 10;
  const hash = bcrypt.hashSync(req.body.password, rounds);
  registerUser(hash, req, res, next);
});

router.post('/login', (req: Login, res, next) => {
  const { login, password } = req.body;

  if (login && password) {
    loginUser(req.body, res);
  } else {
    res.status(500).send('error while login, no password or login');
  }
});

export default router;
