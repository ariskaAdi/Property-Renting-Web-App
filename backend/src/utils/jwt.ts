import { Response } from "express";
import { sign } from "jsonwebtoken";
import AppError from "../errors/AppError";

interface User {
  id: string;
  role: string;
}

export const generateTokenAndSetCookie = (
  res: Response,
  existingUser: User
) => {
  if (!process.env.TOKEN_KEY) {
    throw new AppError("TOKEN_KEY is not set in environment variables", 500);
  }
  const token = sign(
    {
      userId: existingUser.id,
      role: existingUser.role,
    },
    process.env.TOKEN_KEY!,

    {
      expiresIn: "24h",
    }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000,
  });

  return token;
};
