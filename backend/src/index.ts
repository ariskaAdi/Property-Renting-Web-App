import express, { Application, Response, Request, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import AuthRouter from "./routes/auth.router";

const PORT: string = "4000";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.configure();
    this.route();
    this.errorHandler();
  }

  private configure(): void {
    const allowedOrigins = [
      "http://localhost:3000", // untuk local dev
      // URL frontend di Vercel
    ];
    this.app.use(
      cors({
        origin: allowedOrigins,
        credentials: true,
      })
    );
    this.app.use(express.json());
  }

  private route(): void {
    const authRouter = new AuthRouter();
    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).json("<h1> Welcome to Property Renting Web App</h1>");
    });
    this.app.use("/auth", authRouter.getRouter());
  }

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
