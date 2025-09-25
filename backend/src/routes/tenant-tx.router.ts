import { Router } from "express";
import TenantTransactions from "../controllers/transaction/tenant/tenant-tx.controller";
<<<<<<< HEAD
<<<<<<< HEAD
import { onlyTenant } from "../middleware/by-role/tenantMiddleware";
import { verifyToken } from "../middleware/VerifyToken";
=======
>>>>>>> main
=======
import { onlyTenant } from "../middleware/by-role/tenantMiddleware";
import { verifyToken } from "../middleware/VerifyToken";
import UserSalesReport from "../controllers/tenant-report/user-sales-report.controller";
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37

class TenantTransactionsRouter {
  private route: Router;
  private tenantTrx: TenantTransactions;
  private userSalesReport: UserSalesReport

<<<<<<< HEAD
    constructor() {
        this.route = Router();
        this.tenantTrx = new TenantTransactions();
<<<<<<< HEAD
        this.initializeRoutes()}

        private initializeRoutes() {
            this.route.post("/accept/:id", verifyToken, onlyTenant, this.tenantTrx.acceptPayment),
            this.route.post("/reject/:id", verifyToken, onlyTenant, this.tenantTrx.rejectPayment),
            this.route.patch("/cancel/:id", verifyToken, onlyTenant, this.tenantTrx.cancelPayment),
            this.route.get("/orders", verifyToken, onlyTenant, this.tenantTrx.getOrderByStatus)
=======
        this.initializeRoutes();}

        private initializeRoutes() {
            this.route.post("/accept/:id"), this.tenantTrx.acceptPayment,
            this.route.post("/reject/:id"), this.tenantTrx.rejectPayment
>>>>>>> main
        }
=======
  constructor() {
    this.route = Router();
    this.tenantTrx = new TenantTransactions();
    this.userSalesReport = new UserSalesReport();

    this.initializeRoutes();
  }
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37

  private initializeRoutes() {
    this.route.get(
      "/availability",
      verifyToken,
      this.tenantTrx.getAvailability
    );
    this.route.get(
      "/orders/tenant",
      verifyToken,
      this.tenantTrx.getReservations
    );

    this.route.get("/room-availability", this.tenantTrx.getRoomAmountAvailable);
    this.route.get("/user/report", verifyToken, this.userSalesReport.getUserSales)

    this.route.patch(
      "/accept/:id",
      verifyToken,
      onlyTenant,
      this.tenantTrx.acceptPayment
    ),
      this.route.patch(
        "/reject/:id",
        verifyToken,
        onlyTenant,
        this.tenantTrx.rejectPayment
      ),
      this.route.patch(
        "/cancel/:id",
        verifyToken,
        onlyTenant,
        this.tenantTrx.cancelPayment
      ),
      this.route.get(
        "/orders",
        verifyToken,
        onlyTenant,
        this.tenantTrx.getReservationByFilter
      );
    this.route.get(
      "/orders/:id",
      verifyToken,
      onlyTenant,
      this.tenantTrx.getReservationById
    );
  }

  public getRouter(): Router {
    return this.route;
  }
}

export default TenantTransactionsRouter;
