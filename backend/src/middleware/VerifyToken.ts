import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const VerifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const token = req.cookies.token
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return new Error("Token not found. Login is required");
    }

    const payload = jwt.verify(
      token,
      process.env.JWT_TOKEN as string
    ) as JwtPayload & {
      id: number;
      username: string;
      email: string;
      role: string;
    };

    res.locals.user = payload;

    return next();
  } catch (err) {
    return new Error("Invalid or expired token");
  }
};
