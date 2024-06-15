import authModel from "../models/auth-model.js";
import jobModel from "../models/job-model.js";
import applicantModel from "../models/applicant-model.js";
const authmodel = new authModel();
const jobmodel = new jobModel();
const applicantmodel = new applicantModel();
export default class authController {
  static register(req, res) {
    const { name, email, password } = req.body;
    const auther = authmodel.getAuth();
    const result = auther.find((i) => i.email === email);
    if (result) {
      return res.status(400).render("error-page", {
        message: "Author already exists. Please go to the login page.",
      });
    }

    if (!name || !email || !password) {
      return res
        .status(400)
        .render("error-page", { message: "All fields are required" });
    }

    try {
      authmodel.addAuth(name, email, password);
      res.status(200).render("login-page");
    } catch (error) {
      console.error("Error occurred during registration:", error);
      res.status(500).render("error-page", {
        message: "Something went wrong during registration",
      });
    }
  }

  static logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.render("login-page");
      }
    });
  }

  static login(req, res) {
    const auther = authmodel.getAuth();
    const { email, password } = req.body;
    const result = auther.find((i) => {
      return i.email === email && i.password === password;
    });
    if (!result) {
      return res.status(500).render("error-page", {
        message: "Author does not exist. Register to access!",
      });
    }
    req.session.authEmail = email;
    return res.render("job-details", { jobs: jobmodel.getAllJobs() });
  }

  static getApplicant(req, res) {
    const id = Number(req.params.id);
    const jobs = jobmodel.getAllJobs();

    const job = jobs.find((i) => i.id === id);

    if (!job) {
      return res.render("error-page", { message: "No any applicant" });
    }
    const applicants = job.applicants;

    // Getting all applicants
    const allApplicants = applicantmodel.getApplicants();

    // Filtering applicants by email
    const applicantArray = applicants.map((email) => {
      return allApplicants.find((applicant) => applicant.email === email);
    });

    const filteredArray = applicantArray.filter((i) => i !== undefined);

    res.render("applicantTable", { filteredArray, count: 0 });
  }

 
}
