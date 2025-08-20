import { NextFunction, Request, Response } from "express";
import { registerTenantService } from "../../services/tenant/tenant.servies";

class TenantController {
  public async registerTenant(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await registerTenantService(req.body);
      res.status(201).send({ message: "Tenant registered", success: true });
    } catch (error) {
      next(error);
    }
  }
}

export default TenantController;
