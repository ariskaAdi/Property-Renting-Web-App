import express, { Application, Response, Request, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";

const PORT: string = "4000";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.configure();
    this.route();
  }

  private configure(): void {
    this.app.use(express.json())
  }

  private route(): void {
    this.app.get("/", (req:Request, res:Response) => {
        res.status(200).json("<h1> Welcome to Property Renting Web App</h1>")
    })
  }

  public start(): void {
    this.app.listen(PORT, () => {
        console.log(`API RUNNING AT: http://localhost:${PORT}`)
    })
  }
}

export default App
