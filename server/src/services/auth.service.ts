import db from '../db/db';
import { v4 as uuidv4 } from 'uuid';
import { Response } from 'express-serve-static-core';

export const addUserToDB = (userHash: string, login: string, email: string, res: Response<any, number>) => {
  const insert = 'INSERT INTO users VALUES(?, ?, ?, ?, ?)';
  db.run(insert, [uuidv4(), Date(), login, email, userHash], err => {
    if (err) {
      console.log(err);
      res.status(422).send(err);
    } else {
      console.log('users table created or updated');
      res.send('user registered');
    }
  });
};
