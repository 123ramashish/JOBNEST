import express from "express";
import applicantController from "../controllers/applicants-controller.js";
import { authvalidation } from "../middleware/login.middleware.js";
const applicantRouter = express.Router();

applicantRouter.get("/", authvalidation,applicantController.getApplicant);
applicantRouter.post("/apply", authvalidation,applicantController.postJob);
applicantRouter.get("/:applicantId");
applicantRouter.put("/:applicantId");
applicantRouter.delete("/applicantId");

export default applicantRouter;
