import bcrypt from 'bcrypt';
import { Response } from 'express-serve-static-core';
import jwt, { JsonWebTokenError, NotBeforeError, TokenExpiredError } from 'jsonwebtoken';
import { QueryConfig, QueryResult } from 'pg';
import {
  AuthError,
  ErrorCodes,
  Login as LoginInterface,
  LoginResponse,
  Registration,
} from '../../../../types/authInterfaces';
import { pool } from '../../db/client';
import { Login } from '../../models/auth/login.interface';
import { Request } from '../../models/auth/request.interface';

export const handleRegister = (req: Request<Registration>, res: Response) => {
  const rounds = 10;
  const hash = bcrypt.hashSync(req.body.password, rounds);
  registerUser(hash, req, res);
};

export const registerUser = async (
  userHash: string,
  req: Request<Registration>,
  res: Response<{ message: string } | AuthError>,
): Promise<void> => {
  const now = new Date();
  const { email, login } = req.body;
  // todo - do not use 'now', set default in db
  const query: QueryConfig = {
    text: 'INSERT INTO users (date_created, login, email, password) VALUES($1, $2, $3, $4)',
    values: [now, login, email, userHash],
  };

  try {
    await pool.query(query);
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

export const handlePostLogin = (req: Login, res: Response) => {
  const { login, password } = req.body;

  if (login && password) {
    loginUser(req.body, res);
  } else {
    res.status(500).send('error while login, no password or login');
  }
};

export const loginUser = async (req: LoginInterface, res: Response<LoginResponse | AuthError>): Promise<void> => {
  const { password, login } = req;
  const query: QueryConfig = { text: 'SELECT * FROM users where login = $1 LIMIT 1', values: [login] };

  try {
    const dbResult: QueryResult<any> = await pool.query(query);
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
        token: jwt.sign({ login, email, id }, process.env.ACCESS_TOKEN_SECRET),
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

export const authenticateJWT = (req: Request<Registration>, res: Response<LoginResponse>, next: () => void) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
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
