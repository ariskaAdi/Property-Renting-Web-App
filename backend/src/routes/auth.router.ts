import { Router } from "express";
import AuthController from "../controllers/auth/auth.controller";

class AuthRouter {
  private route: Router;
  private authController: AuthController;

  constructor() {
    this.route = Router();
    this.authController = new AuthController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.route.post("/register", this.authController.register);
    this.route.post("/login", this.authController.login);
    this.route.patch("/new-otp", this.authController.newOtp);
    this.route.patch("/verify-email", this.authController.verifyEmail);
  }
  public getRouter(): Router {
    return this.route;
  }
}

export default AuthRouter;
