import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../model/user.interface';
import { addUserToDB } from '../services/auth.service';

const router = express.Router();
interface Request {
  body: User;
}

router.get('/hello', (req, res) => {
  res.send('test data');
});

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
