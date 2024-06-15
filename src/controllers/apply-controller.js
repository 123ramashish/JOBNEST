import userModel from "../models/user-model.js";
import applicantModel from "../models/applicant-model.js";
import jobModel from "../models/job-model.js";

const usermodel = new userModel();
const applicantmodel = new applicantModel();
const jobmodel = new jobModel();

export default class applyJob {
  static jobapplied(req, res) {
    const { name, email, contact } = req.body;
    const id = req.params.id;
    const resumePath = "files/" + req.file.filename;

    // Add the missing 'contact' parameter from the request body

    // Add proper error handling
    try {
      // const user = applicantmodel.addApplicant(name, email, contact);
      const allapplicants = applicantmodel.getApplicants();
      const existApplicant = allapplicants.find(i=>{i.email===email});
      if(existApplicant){
 return res
          .status(404)
          .render("error-page", { message: "Oops, Applcant already exist!" });
      

      }
 applicantmodel.addApplicant(name, email, contact, resumePath);
const allJobs = jobmodel.getAllJobs();
const job = allJobs.find((i) => {
  return i.id === id;
});

job.applicants.push(email);
      
      



      

      // Render the job details after successful application
      return res.render("job-details", { jobs: jobmodel.getAllJobs() });
    } catch (error) {
      // Handle any unexpected errors
      console.error("Error:", error);
      return res
        .status(500)
        .render("error-page", { message: "Internal Server Error" });
    }
  }
}
