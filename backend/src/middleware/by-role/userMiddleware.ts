import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/AppError";

export const onlyUser = (req: Request, res: Response, next: NextFunction) => {
  const role = res.locals.decrypt.role;
  if (role !== "user") {
    throw new AppError(
      "Unauthorized access, only user can access this route",
      403
    );
  }
  next();
};
