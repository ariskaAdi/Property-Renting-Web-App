import { NextFunction, Request, Response } from "express";
import {
  createPropertyServices,
  deletePropertyServices,
  getAllPropertiesService,
  getPropertyByIdService,
  updatePropertyServices,
} from "../../services/property/property.service";
import { findTenantByUserId } from "../../repositories/tenant/tenant.repository";
import AppError from "../../errors/AppError";
import { PropertyCategory } from "../../../prisma/generated/client";

class PropertyController {
  public async getAllProperties(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { property_category } = req.query;
    try {
      if (
        property_category &&
        !Object.values(PropertyCategory).includes(
          property_category as PropertyCategory
        )
      ) {
        throw new AppError("Invalid property category", 400);
      }
      const properties = await getAllPropertiesService({
        property_category: property_category as PropertyCategory,
      });
      res
        .status(200)
        .send({ message: "Properties found", success: true, properties });
    } catch (error) {
      next(error);
    }
  }

  public async getPropertyById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const property = await getPropertyByIdService(req.params.id);
      res
        .status(200)
        .send({ message: "Property found", success: true, property });
    } catch (error) {
      next(error);
    }
  }

  public async createProperty(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.decrypt.userId;
      const tenant_id = await findTenantByUserId(userId);

      if (!tenant_id) {
        throw new AppError("Tenant not found", 404);
      }

      const property = await createPropertyServices({
        ...req.body,
        file: req.file,
        tenant_id,
      });
      res
        .status(201)
        .send({ message: "Property created", success: true, property });
    } catch (error) {
      next(error);
    }
  }

  public async updateProperty(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const property = await updatePropertyServices(req.params.id, req.body);
      res
        .status(200)
        .send({ message: "Property updated", success: true, property });
    } catch (error) {
      next(error);
    }
  }

  public async deleteProperty(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const property = await deletePropertyServices(req.params.id);
      res
        .status(200)
        .send({ message: "Property deleted", success: true, property });
    } catch (error) {
      next(error);
    }
  }
}

export default PropertyController;
