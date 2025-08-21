import { Router } from "express";
import TenantController from "../controllers/tenant/tenant.controller";
import { onlyTenant } from "../middleware/by-role/tenantMiddleware";

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
  }
  public getRouter(): Router {
    return this.route;
  }
}

export default TenantRouter;
