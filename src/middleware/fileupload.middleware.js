import multer from "multer";
import fs from "fs";
import path from "path";
 export const uploadFile = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = path.resolve("src","public","images");
      // Check if the directory exists, if not, create it
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
      }
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      const name = Date.now() + "_" + file.originalname;
      cb(null, name);
    },
  }),
});
