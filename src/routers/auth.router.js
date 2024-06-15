import express from "express";
import authController from "../controllers/auth-controller.js";
const authRouter = express.Router();

authRouter.post("/register", authController.register);
authRouter.get("/:id", authController.getApplicant);
authRouter.post("/login", authController.login);
authRouter.post("/logout", authController.logout);
export default authRouter;
