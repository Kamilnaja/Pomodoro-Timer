import bcrypt from "bcrypt";
import { Response } from "express-serve-static-core";
import jwt, { JsonWebTokenError, NotBeforeError, TokenExpiredError } from "jsonwebtoken";
import { QueryResult } from "pg";
import { v4 as uuidv4 } from "uuid";
import { AuthError, ErrorCodes, Login, LoginResponse } from "../../../types/interfaces";
import pool from "../db/db";
import { Request } from "../models/auth/request.interface";

export async function registerUser(userHash: string, req: Request, res: Response<any | AuthError>): Promise<void> {
  const insert = "INSERT INTO users VALUES($1, $2, $3, $4, $5)";

  try {
    const now = new Date();
    const { email, login } = req.body;
    await pool.query(insert, [uuidv4(), now, login, email, userHash]);
    console.log("user registered");
    res.json({ message: "success" });
  } catch (err: any) {
    handleError(err, res);
  }
}

const handleError = (err: { stack: any; constraint: string }, res: Response<AuthError>): void => {
  console.log(err.stack);
  switch (err.constraint) {
    case "users_email_key":
      res.status(401).send({
        code: ErrorCodes.EMAIL_CURRENTLY_EXISTS,
        message: "Email currently in use, please provide another",
      });
      break;
    case "users_login_key":
      res.status(401).send({
        code: ErrorCodes.USER_CURRENTLY_EXISTS,
        message: "Login currently exists. Please choose other login",
      });
      break;
    default:
      console.log(err);
  }
};

export async function loginUser(req: Login, res: Response<LoginResponse | AuthError>): Promise<void> {
  const query = "SELECT * FROM users where login = $1 LIMIT 1";

  try {
    const { password, login } = req;
    const dbResult: QueryResult<any> = await pool.query(query, [login]);
    if (!dbResult.rows.length) {
      res.status(401).send({
        code: ErrorCodes.USER_NOT_FOUND,
        message: "User not found. Please make sure, that you have been registered before login",
      });
    } else {
      await handleCorrectUser(password, dbResult, res);
    }
  } catch (err: any) {
    console.log("error when login: " + err.stack);
    res.send(err.stack);
  }
}

async function handleCorrectUser(currentPassword: string, dbResult: QueryResult, res: Response<LoginResponse | AuthError>) {
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
        message: "password is incorrect!!!",
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
