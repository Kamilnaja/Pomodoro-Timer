import { Response } from "express-serve-static-core";
import { QueryResult } from "pg";
import { v4 as uuidv4 } from "uuid";
import pool from "../db/db";
import { Request } from "../models/auth/request.interface";
import { generateAccessToken } from "./authenticateToken";

export async function registerUser(userHash: string, req: Request, res: Response<string | Error, number>) {
  // const insert = "INSERT INTO users VALUES(?, ?, ?, ?, ?)";
  const insert = "select * from pomodoros";

  try {
    await pool.query(insert, [uuidv4(), Date(), req.body.login, req.body.email, userHash]);
    // check if exists
    res.send("user registered");
  } catch (err: any) {
    console.log(err.stack);
    res.status(422).send(err);
  }
}

export async function loginUser(login: string, password: string, res: Response<string | Error, number>) {
  const query = "SELECT * FROM users where login = $1";

  try {
    // wybierz usera z bazy

    const dbResult: QueryResult<any> = await pool.query(query, [login]);

    console.log(dbResult.rows);
    // const token = generateAccessToken(login);
    // console.log(dbResult);
    // console.log("token " + token);
    // res.json(token);
  } catch (err: any) {
    console.log("error when login: " + err.stack);
    res.send(err.stack);
  }
}
