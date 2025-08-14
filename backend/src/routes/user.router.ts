import { Router } from "express";
import UserController from "../controllers/user/user.controller";
import { verifyToken } from "../middleware/VerifyToken";

class UserRouter {
  private route: Router;
  private userController: UserController;

  constructor() {
    this.route = Router();
    this.userController = new UserController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.route.get("/", verifyToken, this.userController.getUserId);
    this.route.post(
      "/otp-password",
      verifyToken,
      this.userController.otpChangePassword
    );
    this.route.patch(
      "/reset-password",
      verifyToken,
      this.userController.resetPassword
    );
  }

  public getRouter(): Router {
    return this.route;
  }
}

export default UserRouter;
