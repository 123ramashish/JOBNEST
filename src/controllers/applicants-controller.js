import jobModel from "../models/job-model.js";
const jobmodel = new jobModel();

export default class applicantController {
  static getApplicant(req, res) {
    res.render("new-job");
  }
  static postJob(req, res) {
    try {
      const {
        jobcategory,
        jobdestination,
        joblocation,
        companyname,
        salary,
        applyby,
        numberofopenings,
      } = req.body;

      const jobposted = new Date().toDateString();
      const skillsrequired = req.body.skillsrequired;
      const jobs = jobmodel.addJob(
        jobcategory,
        jobdestination,
        joblocation,
        companyname,
        salary,
        applyby,
        skillsrequired,
        numberofopenings,
        jobposted
      );

      return res.render("job-details", { jobs: jobs });
    } catch (err) {
      console.log(err);
      return res.render("error-page", {
        message: "Error occurred while posting the job!",
      });
    }
  }
}
