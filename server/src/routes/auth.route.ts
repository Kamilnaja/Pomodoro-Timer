import express from "express";
import bcrypt from "bcrypt";
import { loginUser, registerUser } from "../services/auth.service";
import { Login as LoginEnum } from "../../../types/interfaces";
import { Request } from "../models/auth/request.interface";
import jwt, { JsonWebTokenError, NotBeforeError, TokenExpiredError } from "jsonwebtoken";

const router = express.Router();

interface Login {
  body: LoginEnum;
}

// Register Handle
router.post("/register", (req: Request, res) => {
  // todo check if exists

  const hash = bcrypt.hashSync(req.body.password, 10);
  registerUser(hash, req, res);
});

router.post("/login", (req: Login, res) => {
  const { login, password } = req.body;

  if (login && password) {
    loginUser(req.body, res);
  } else {
    res.status(500).send("error while login, no password or login");
  }
});

const authenticateJWT = (req: any, res: any, next: () => void) => {
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

export { router, authenticateJWT };
