import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/AppError";

export const onlyTenant = (req: Request, res: Response, next: NextFunction) => {
  const role = res.locals.decrypt.role;
  if (role !== "tenant") {
    throw new AppError(
      "Unauthorized access, only tenant can access this route",
      403
    );
  }
  next();
};
