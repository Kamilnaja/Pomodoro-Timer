import express from "express";
import bcrypt from "bcrypt";
import { loginUser, registerUser } from "../services/auth.service";
import { Login as LoginEnum } from "../../../types/interfaces";
import { Request } from "../models/auth/request.interface";

const router = express.Router();

interface Login {
  body: LoginEnum;
}

// Register Handle
router.post("/register", (req: Request, res) => {
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

export { router };
