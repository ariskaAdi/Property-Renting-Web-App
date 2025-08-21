import { Router } from "express";
import PropertyController from "../controllers/property/property.controller";
import { verifyToken } from "../middleware/VerifyToken";
import { onlyTenant } from "../middleware/by-role/tenantMiddleware";
import { myUploadMiddleware } from "../middleware/uploader";

class PropertyRouter {
  private route: Router;
  private propertyController: PropertyController;

  constructor() {
    this.route = Router();
    this.propertyController = new PropertyController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.route.post(
      "/create",
      verifyToken,
      onlyTenant,
      myUploadMiddleware,
      this.propertyController.createProperty
    );
    this.route.get("/all", this.propertyController.getAllProperties);
    this.route.get("/get/:id", this.propertyController.getPropertyById);
    this.route.patch("/update/:id", this.propertyController.updateProperty);
    this.route.delete("/delete/:id", this.propertyController.deleteProperty);
  }

  public getRouter(): Router {
    return this.route;
  }
}

export default PropertyRouter;
