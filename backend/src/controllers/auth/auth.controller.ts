import { NextFunction, Request, Response } from "express";
import {
  newOtpService,
  registerService,
  verifyEmailService,
} from "../../services/auth/auth.service";

class AuthController {
  public async register(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await registerService(req.body);
      res.status(201).send({ message: "User registered", success: true });
    } catch (error) {
      next(error);
    }
  }

  public async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    // code
  }

  public async verifyEmail(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await verifyEmailService(req.body);
      res.send({ message: "Email verified", success: true });
    } catch (error) {
      next(error);
    }
  }

  public async newOtp(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await newOtpService(req.body);
      res.send({ message: "OTP sent to your email", success: true });
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
