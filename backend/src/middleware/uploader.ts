import multer from "multer";
import { Request} from "express";

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { files: 1 * 1024 * 1024 },
  fileFilter: (req: Request, file: Express.Multer.File, callback) => {
    const allowedExt = /\.(jpg|png)$/i;
    const allowedMime = ["image/jpeg", "image/png"];

    if (!allowedExt.test(file.originalname)) {
      return callback(new Error("Wrong file extension!"));
    }

    if (!allowedMime.includes(file.mimetype)) {
      return callback(new Error("Invalid mime type!"));
    }

    callback(null, true);
  },
});
export const myUploadMiddleware = upload.single("payment_proof");


