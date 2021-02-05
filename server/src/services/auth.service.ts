import bcrypt from 'bcrypt';
import { NextFunction } from 'express';
import { Response } from 'express-serve-static-core';
import jwt, { JsonWebTokenError, NotBeforeError, TokenExpiredError } from 'jsonwebtoken';
import { QueryResult } from 'pg';
import { AuthError, ErrorCodes, Login, LoginResponse, Registration } from '../../../types/authInterfaces';
import pool from '../db/db';
import { Request } from '../models/auth/request.interface';

export const registerUser = async (
  userHash: string,
  req: Request,
  res: Response<{ message: string } | AuthError>,
  next: NextFunction,
): Promise<void> => {
  const insert = 'INSERT INTO users (dateCreated, login, email, password) VALUES($1, $2, $3, $4)';

  try {
    const now = new Date();
    const { email, login } = req.body;

    await pool.query(insert, [now, login, email, userHash]);
    console.log('user registered');
    res.json({ message: 'success' });
  } catch (err: any) {
    handleRegisterError(err, res);
  }
};

const handleRegisterError = (err: { stack: any; constraint: string }, res: Response<AuthError>): void => {
  console.log(err.stack);
  switch (err.constraint) {
    case 'users_email_key':
      res.status(401).send({
        code: ErrorCodes.EMAIL_CURRENTLY_EXISTS,
        message: 'Email currently in use, please provide another',
      });
      break;
    case 'users_login_key':
      res.status(401).send({
        code: ErrorCodes.USER_CURRENTLY_EXISTS,
        message: 'Login currently exists. Please choose other login',
      });
      break;
    default:
      console.log(err);
  }
};

export const loginUser = async (req: Login, res: Response<LoginResponse | AuthError>): Promise<void> => {
  const query = 'SELECT * FROM users where login = $1 LIMIT 1';

  try {
    const { password, login } = req;
    const dbResult: QueryResult<any> = await pool.query(query, [login]);
    if (!dbResult.rows.length) {
      res.status(401).send({
        code: ErrorCodes.USER_NOT_FOUND,
        message: 'User not found. Please make sure, that you have been registered before login',
      });
    } else {
      await checkPassword(password, dbResult, res);
    }
  } catch (err: any) {
    console.log('error when login: ' + err.stack);
    res.send(err.stack);
  }
};

const checkPassword = async (
  currentPassword: string,
  dbResult: QueryResult,
  res: Response<LoginResponse | AuthError>,
) => {
  try {
    const { password, email, login, id } = dbResult.rows[0];

    const isPasswordCorrect = await bcrypt.compare(currentPassword, password);

    if (isPasswordCorrect) {
      console.log('password correct!!!');
      res.json({
        token: jwt.sign({ login, email, id }, process.env.ACCESS_TOKEN_SECRET || 'loremipsumdolorsitamet'),
      });
    } else {
      res.status(401).send({
        code: ErrorCodes.PASSWORD_INCORRECT,
        message: 'password is incorrect!!!',
      });
    }
  } catch (err: any) {
    console.log('Error while comparing passord' + err);
    res.status(401).send({
      code: ErrorCodes.OTHER_ERROR,
      message: 'Error while comparing your password',
    });
  }
};

export const authenticateJWT = (req: Request, res: any, next: () => void) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET || 'loremipsumdolorsitamet', // todo - remove
      (err: JsonWebTokenError | NotBeforeError | TokenExpiredError | null, user: Registration) => {
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
