import { NextFunction, Request, Response } from "express";
import {
  createRoomService,
  getRoomByIdService,
  getRoomsService,
} from "../../services/rooms/rooms.services";

class RoomsController {
  public async getRoomsController(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = await getRoomsService();
      res.status(200).send({ message: "Rooms found", success: true, response });
    } catch (error) {
      next(error);
    }
  }

  public async getRoomByIdController(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = await getRoomByIdService(req.params.id);
      res.status(200).send({ message: "Room found", success: true, response });
    } catch (error) {
      next(error);
    }
  }

  public async createRoomController(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { property_id } = req.params;

      const response = await createRoomService(
        req.body,
        property_id,
        req.file as Express.Multer.File
      );
      res
        .status(200)
        .send({ message: "Room created", success: true, response });
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
