import express from 'express';
import bcrypt from 'bcrypt';
import { addUserToDB } from '../services/auth.service';
import { Registration } from '../../../types/interfaces';
const router = express.Router();
interface Request {
  body: Registration;
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
