import express from "express";
import bcrypt from "bcrypt";
import { registerUser, loginUser } from "../services/auth.service";
import { Login as LoginEnum, Registration } from "../../../types/interfaces";
const router = express.Router();

interface Request {
  body: Registration;
}

interface Login {
  body: LoginEnum;
}

// Register Handle
router.post("/register", (req: Request, res) => {
  const { login, email, password } = req.body;

  // todo check if exists
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      throw err;
    }
    registerUser(hash, login, email, res);
  });
});

router.post("/login", (req: Login, res) => {
  const { login, password } = req.body;

  if (login && password) {
    loginUser(login, password, res);
  } else {
    res.status(422).send("error while login");
  }
});

export default router;
