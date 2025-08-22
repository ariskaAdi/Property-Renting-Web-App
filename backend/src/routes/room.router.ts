import { Router } from "express";
import RoomsController from "../controllers/rooms/rooms.controller";
import { handleUpload } from "../config/cloudinary";
import { uploaderMemory } from "../middleware/uploader";

class RoomRouter {
  private route: Router;
  private roomRouter: RoomsController;

  constructor() {
    this.route = Router();
    this.roomRouter = new RoomsController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.route.get("/all", this.roomRouter.getRoomsController);
    this.route.get("/get/:id", this.roomRouter.getRoomByIdController);
    this.route.post(
      "/create/:property_id",
      uploaderMemory().single("image"),
      this.roomRouter.createRoomController
    );
  }

  public getRouter(): Router {
    return this.route;
  }
}

export default RoomRouter;
