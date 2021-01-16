import { Response } from "express-serve-static-core";
import { v4 as uuidv4 } from "uuid";
import pool from "../db/db";

export const registerUser = (userHash: string, login: string, email: string, res: Response<string | Error, number>) => {
  const insert = "INSERT INTO users VALUES(?, ?, ?, ?, ?)";

  console.log(login);

  pool.query(insert, [uuidv4(), Date(), login, email, userHash], (err: Error) => {
    if (err) {
      console.log(err);
      res.status(422).send(err);
    } else {
      console.log("users table created or updated");
      res.send("user registered");
    }
  });
};

export const loginUser = (login: string, password: string, res: Response<string | Error, number>) => {
  const find = "SELECT * FROM users where login = ?";

  pool.query(find, [login], (err: Error, result: any) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(result);
    }
  });
};
