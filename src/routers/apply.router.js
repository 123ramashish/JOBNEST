import express from "express";
import applyJob from "../controllers/apply-controller.js";
import validRequest from "../middleware/validrequest.middleware.js";
import { uploadFile } from "../middleware/fileupload.middleware.js";

const applyRouter = express.Router();

applyRouter.post(
  "/",
  // corrected middleware name
  uploadFile.single("resumePath"),
  applyJob.jobapplied
);

export default applyRouter;
