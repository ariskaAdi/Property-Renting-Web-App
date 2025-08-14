import express, { Application, Response, Request, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import AuthRouter from "./routes/auth.router";
import logger from "./utils/logger";
import UserRouter from "./routes/user.router";

const PORT: string | number = process.env.PORT || 4000;

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.configure();
    this.route();
    this.errorHandler();
  }

  private configure(): void {
    this.app.use(express.json());
  }

  private route(): void {
    const authRouter = new AuthRouter();
    const userRouter = new UserRouter();
    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).json("<h1> Welcome to Property Renting Web App</h1>");
    });
    this.app.use("/auth", authRouter.getRouter());
    this.app.use("/user", userRouter.getRouter());
  }

  // errror handling
  private errorHandler(): void {
    this.app.use(
      (error: any, req: Request, res: Response, next: NextFunction) => {
        logger.error(
          `${req.method} ${req.path} ${error.message} ${JSON.stringify(error)}`
        );
        res.status(error.rc || 500).send(error);
      }
    );
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`API RUNNING AT: http://localhost:${PORT}`);
    });
  }
}

export default App;
