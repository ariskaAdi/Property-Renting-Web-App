import { Router } from "express";
import TenantTransactions from "../controllers/transaction/tenant/tenant-tx.controller";

class TenantTransactionsRouter {
    private route: Router;
    private tenantTrx: TenantTransactions;

    constructor() {
        this.route = Router();
        this.tenantTrx = new TenantTransactions();
        this.initializeRoutes();}

        private initializeRoutes() {
            this.route.post("/accept/:id"), this.tenantTrx.acceptPayment,
            this.route.post("/reject/:id"), this.tenantTrx.rejectPayment
        }

        public getRouter(): Router{
            return this.route
        }
    
}

export default TenantTransactionsRouter