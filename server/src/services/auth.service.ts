import { Response } from "express-serve-static-core";
import { v4 as uuidv4 } from "uuid";
import pool from "../db/db";
import { generateAccessToken } from "./authenticateToken";

export async function registerUser(userHash: string, login: string, email: string, res: Response<string | Error, number>) {
  const insert = "INSERT INTO users VALUES(?, ?, ?, ?, ?)";

  try {
    const dbResult = pool.query(insert, [uuidv4(), Date(), login, email, userHash]);
    res.send("user registered");
  } catch (err: any) {
    res.status(422).send(err);
  }
}

export async function loginUser(login: string, password: string, res: Response<string | Error, number>) {
  const query = "SELECT * FROM users where login = $1";

  try {
    const dbResult = await pool.query(query, [login]);
    const token = generateAccessToken(login);
    // console.log(dbResult);
    console.log("token " + token);
    // res.json(token);
  } catch (err: any) {
    console.log("error when login: " + err);
    res.send(err);
  }
}
