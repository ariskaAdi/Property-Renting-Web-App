import { Router } from "express";
import UserTransactions from "../controllers/transaction/user/user-tx.controller";
import { onlyUser } from "../middleware/by-role/userMiddleware";
import { verifyToken } from "../middleware/VerifyToken";
<<<<<<< HEAD
=======
import { uploaderMemory } from "../middleware/uploader";
import BookingReviews from "../controllers/reviews/review.controller";
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37

class UserTransactionsRouter {
    private route: Router;
    private userTrx: UserTransactions;
<<<<<<< HEAD
=======
    private reviewController: BookingReviews
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37


    constructor() {
        this.route = Router();
        this.userTrx = new UserTransactions();
<<<<<<< HEAD
        this.initializeRoutes()}

        private initializeRoutes() {
            this.route.post("/create", verifyToken, onlyUser, this.userTrx.reservation),
            this.route.post("/proof", verifyToken, onlyUser, this.userTrx.paymentProofUpload)
            this.route.get("/get", verifyToken, onlyUser, this.userTrx.getReservations),
            this.route.get("/get/history", verifyToken, onlyUser, this.userTrx.getReservationsHistory)
=======
        this.reviewController = new BookingReviews();
        this.initializeRoutes()}

        private initializeRoutes() {
            this.route.post("/create", verifyToken, onlyUser, this.userTrx.createBooking),
            this.route.patch("/proof/:bookingId", verifyToken, onlyUser, uploaderMemory().single("proof_image"), this.userTrx.paymentProofUpload)
            this.route.post("/:bookingId/reviews", verifyToken, onlyUser, this.reviewController.createReview),
            this.route.get("/get", verifyToken, onlyUser, this.userTrx.getReservations),
            this.route.get("/:bookingId", verifyToken, onlyUser, this.userTrx.getReservationById),
            this.route.get("/get/history", verifyToken, onlyUser, this.userTrx.getReservationsHistory),
            this.route.patch("/cancel/:id", verifyToken, onlyUser, this.userTrx.cancelPayment)
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
        }

        public getRouter(): Router{
            return this.route
        }
}

export default UserTransactionsRouter
