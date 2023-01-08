import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export function loginHandler(req: Request, res: Response) {
  //req.body = { email: "asdd@gmail.com" }
  //validation, express-validation
  // save to database
  //create token ljhslduf98sydlkfhsiug68sdf9ygilfdg987
  const token = jwt.sign(
    {
      email: "drakolin@gmail.com",
    },
    "secret",
    {
      expiresIn: 60 * 60 * 24, //24hrs
    }
  );
  return res.json({ token: token });
}
export function profileHandler(req: Request, res: Response) {
  req.user;

  return res.json({
    profile: {
      username: req.user,
      message: "profile data"
    },

  });
}
