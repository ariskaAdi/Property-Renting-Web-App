import { NextFunction, Request, Response } from "express";

class PropertyController {
  public async getAllProperties(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const properties = await getAllPropertiesService();
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

  public async getPropertyByParams(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
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
      const property = await createPropertyService(req.body);
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
      const property = await updatePropertyService(req.params.id, req.body);
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
      const property = await deletePropertyService(req.params.id);
      res
        .status(200)
        .send({ message: "Property deleted", success: true, property });
    } catch (error) {
      next(error);
    }
  }
}

export default PropertyController;
