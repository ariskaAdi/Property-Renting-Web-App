import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import { JsonWebTokenError, TokenExpiredError, verify } from "jsonwebtoken";

type JwtPayload = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!process.env.TOKEN_KEY) {
      throw new AppError("TOKEN_KEY is not set", 500);
    }

    const token =
      req.headers.authorization?.split(" ")[1] || req.cookies?.token;
    if (!token) {
      throw new AppError("Token not found", 401);
    }

    const decoded = verify(token, process.env.TOKEN_KEY) as JwtPayload;
    res.locals.decrypt = decoded;

    next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      next(new AppError("Token expired", 401));
    } else if (error instanceof JsonWebTokenError) {
      next(new AppError("Invalid token", 401));
    } else {
      next(new AppError("Unauthorized", 401));
    }
  }
};
