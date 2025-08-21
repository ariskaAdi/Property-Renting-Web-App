import { NextFunction, Request, Response } from "express";

class RoomsController {
  public async getRooms(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // code
    } catch (error) {
      next(error);
    }
  }

  public async getRoomById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // code
    } catch (error) {
      next(error);
    }
  }

  public async createRoom(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // code
    } catch (error) {
      next(error);
    }
  }

  public async updateRoom(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // code
    } catch (error) {
      next(error);
    }
  }

  public async deleteRoom(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // code
    } catch (error) {
      next(error);
    }
  }
}

export default RoomsController;
