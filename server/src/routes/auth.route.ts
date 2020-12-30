import express from 'express';
import db from '../db/db';
import { User } from '../model/user';
const router = express.Router();

router.get('/login', (req, res) => res.send('login'));

router.get('/register', (req, res) => res.send('login'));

interface Request {
  body: User;
}

// Register Handle
router.post('/register', (req: Request, res) => {
  console.log(req.body);
  const { name, email } = req.body;
  // todo check if exists
  const insert = 'INSERT INTO users VALUES(?, ?, ?, ?, ?)';

  db.run(insert, ['userID1', 'now', 'name', email, 'password'], err => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log('users table created or updated');
      res.send('user registered');
    }
  });
});

export default router;
