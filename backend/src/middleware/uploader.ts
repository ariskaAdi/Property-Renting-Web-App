import multer from "multer";
import { handleUpload } from "../config/cloudinary";
import { Request, Response, NextFunction, RequestHandler } from "express";

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { files: 1 * 1024 * 1024 },
  fileFilter: (req, file: Express.Multer.File, callback) => {
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
export const myUploadMiddleware = upload.single("sample_file");

const handler = async (req: Request, res: Response) => {
    if (!req.file) {
      res.status(400).send("No file uploaded.");
      return;
    }
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64; // Must be converted to base64 data URI since Cloudinary cannot handle raw Node.js buffer
    const cldRes = await handleUpload(dataURI); // This syntax is much more simpler than using Streamifier, but the downside is base64 consumes 33% more memory.
    res.json(cldRes);
  }
export default handler;
