import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../model/user.interface';
import { addUserToDB } from '../services/auth.service';

const router = express.Router();

router.get('/login', (req, res) => res.send('login'));

router.get('/register', (req, res) => res.send('login'));

interface Request {
  body: User;
}

// Register Handle
router.post('/register', (req: Request, res) => {
  const { name, email, password } = req.body;
  // todo check if exists

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      throw err;
    }
    addUserToDB(hash, name, email, res);
  });
});

export default router;
