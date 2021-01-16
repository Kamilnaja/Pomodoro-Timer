import jwt from "jsonwebtoken";

export function authenticateToken(req: any, res: any, next: () => void) {
  // Gather the jwt access token from the request header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401); // if there isn't any token

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || ("DFGADDDDAD" as string), (err: any, user: any) => {
    console.log("error when verify " + err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next(); // pass the execution off to whatever request the client intended
  });
}

export function generateAccessToken(username: string) {
  // expires after half and hour (1800 seconds = 30 minutes)
  return jwt.sign(username, process.env.ACCESS_TOKEN_SECRET);
}
