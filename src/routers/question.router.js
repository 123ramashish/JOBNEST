import express from "express";
import questionController from "../controllers/question.controller.js";
const questioncontroller = new questionController();

const questionRouter = express.Router();

questionRouter.get("/", questioncontroller.questionHandle);
questionRouter.get("/chat", questioncontroller.chatHandle);

export default questionRouter;
