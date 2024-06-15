import quesionModel from "../models/question.model.js";
const quesionmodel = new quesionModel();
export default class questionController {
  questionHandle(req, res) {
    try {
      const questionArray = quesionmodel.getQuestions();

      return res.render("question", { questionArray });
    } catch (error) {
      console.error("Error:", error);
      return res
        .status(500)
        .render("error-page", { message: "Internal Server Error" });
    }
  }
  chatHandle(req, res) {
    try {
      return res.render("chat-list");
    } catch (error) {
      console.error("Error:", error);
      return res
        .status(500)
        .render("error-page", { message: "Internal Server Error" });
    }
  }
}
