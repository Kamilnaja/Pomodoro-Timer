import { Response } from "express-serve-static-core";
import { QueryResult } from "pg";
import { v4 as uuidv4 } from "uuid";
import pool from "../db/db";
import { Request } from "../models/auth/request.interface";
import { Error, ErrorCodes, Login, Registration } from "../../../types/interfaces";
import bcrypt from "bcrypt";
import jwt, { JsonWebTokenError, NotBeforeError, TokenExpiredError } from "jsonwebtoken";

export async function registerUser(userHash: string, req: Request, res: Response<string | Error>) {
  const insert = "INSERT INTO users VALUES($1, $2, $3, $4, $5)";

  try {
    const now = new Date();
    const { email, login } = req.body;
    await pool.query(insert, [uuidv4(), now, login, email, userHash]);
    console.log("user registered");
    res.send("user registered");
  } catch (err: any) {
    handleError(err, res);
  }
}

function handleError(err: any, res: Response<Error>) {
  console.log(err.stack);
  res.status(422).send({
    code: ErrorCodes.USER_CURRENTLY_EXISTS,
    message: err.detail,
  } as Error);
}

export async function loginUser(req: Login, res: Response<any | Error>): Promise<void> {
  const query = "SELECT * FROM users where login = $1 LIMIT 1";
  try {
    const { password, login } = req;
    const dbResult: QueryResult<any> = await pool.query(query, [login]);
    if (!dbResult.rows.length) {
      res.status(401).send({
        code: ErrorCodes.USER_NOT_FOUND,
        message: "user not found",
      });
    } else {
      await handleCorrectUser(password, dbResult, res);
    }
  } catch (err: any) {
    console.log("error when login: " + err.stack);
    res.send(err.stack);
  }
}

async function handleCorrectUser(currentPassword: string, dbResult: QueryResult, res: Response<any | Error>) {
  try {
    const { password, email, login } = dbResult.rows[0];
    const isPasswordCorrect = await bcrypt.compare(currentPassword, password);
    if (isPasswordCorrect) {
      console.log("password correct!!!");
      res.json({
        token: jwt.sign({ login, email }, process.env.ACCESS_TOKEN_SECRET || "loremipsumdolorsitamet"),
      });
    } else {
      res.status(401).send({
        code: ErrorCodes.PASSWORD_INCORRECT,
        message: "password is incorrect gerrarahia!!!",
      });
    }
  } catch (err: any) {
    console.log("Error while comparing passord" + err);
    res.status(401).send({
      code: ErrorCodes.OTHER_ERROR,
      message: "Error while comparing your password",
    });
  }
}

export const authenticateJWT = (req: any, res: any, next: () => void) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET || "loremipsumdolorsitamet",
      (err: JsonWebTokenError | NotBeforeError | TokenExpiredError | null, user: any) => {
        if (err) {
          return res.sendStatus(403);
        }

        req.user = user;
        next();
      },
    );
  } else {
    res.sendStatus(401);
  }
};
