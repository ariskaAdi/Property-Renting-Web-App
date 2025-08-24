import { Router } from "express";
import TenantController from "../controllers/tenant/tenant.controller";
import { onlyTenant } from "../middleware/by-role/tenantMiddleware";
import { verifyToken } from "../middleware/VerifyToken";
import { uploaderMemory } from "../middleware/uploader";

class TenantRouter {
  private route: Router;
  private tenantController: TenantController;

  constructor() {
    this.route = Router();
    this.tenantController = new TenantController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.route.post(
      "/register",
      onlyTenant,
      this.tenantController.registerTenant
    );
    this.route.patch(
      "/update",
      verifyToken,
      uploaderMemory().single("logo"),
      this.tenantController.updateTenant
    );
  }
  public getRouter(): Router {
    return this.route;
  }
}

export default TenantRouter;
