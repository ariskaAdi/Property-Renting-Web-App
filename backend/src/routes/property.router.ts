import { Router } from "express";
import PropertyController from "../controllers/property/property.controller";
import { verifyToken } from "../middleware/VerifyToken";
import { onlyTenant } from "../middleware/by-role/tenantMiddleware";
import { uploaderMemory } from "../middleware/uploader";
import BookingReviews from "../controllers/reviews/review.controller";
import {
  createPropertyValidation,
  editPropertyValidation,
} from "../middleware/validation/property";

class PropertyRouter {
  private route: Router;
  private propertyController: PropertyController;
  private reviewController: BookingReviews;

  constructor() {
    this.route = Router();
    this.propertyController = new PropertyController();
    this.reviewController = new BookingReviews();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.route.post(
      "/create",
      verifyToken,
      onlyTenant,
      uploaderMemory().single("main_image"),
      createPropertyValidation,
      this.propertyController.createProperty
    );
    this.route.get("/all", this.propertyController.getAllProperties);
    this.route.get("/:propertyId/reviews", this.reviewController.getReviews);
    this.route.get("/get/:id", this.propertyController.getPropertyById);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
    this.route.get("/nearby", this.propertyController.getPropertyByLocation);
    this.route.get(
      "/tenant",
      verifyToken,
      this.propertyController.getPropertiesByTenantId
    );
<<<<<<< HEAD
=======
>>>>>>> main
    this.route.patch("/update/:id", this.propertyController.updateProperty);
    this.route.delete("/delete/:id", this.propertyController.deleteProperty);
=======
    this.route.patch(
      "/update/:id",
      verifyToken,
      onlyTenant,
      uploaderMemory().single("main_image"),
      editPropertyValidation,
      this.propertyController.updateProperty
    );
    this.route.patch(
      "/delete/:id",
      verifyToken,
      onlyTenant,
      this.propertyController.deleteProperty
    );
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
  }

  public getRouter(): Router {
    return this.route;
  }
}

export default PropertyRouter;
