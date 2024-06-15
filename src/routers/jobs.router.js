import express from "express";

import jobController from "../controllers/job-controller.js";
const jobRouter = express.Router();


jobRouter.get("/", jobController.getAll);
jobRouter.post("/",);
jobRouter.get("/:id", jobController.getjob);
jobRouter.put("/:id");
jobRouter.delete("/:id");

export default jobRouter;
