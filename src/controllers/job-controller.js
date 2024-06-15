import jobModel from "../models/job-model.js";

const jobmodel = new jobModel();

class jobController {
  static getAll(req, res) {
    try {
      const allJobs = jobmodel.getAllJobs();
      res.render("job-details", { jobs: allJobs });
    } catch (error) {
      console.error("Error retrieving all jobs:", error);
      res.render("error-page", {
        message: "Oops, something went wrong while retrieving all jobs!",
      });
    }
  }

  static getjob(req, res) {
    try {
      const id = Number(req.params.id);

      const allJobs = jobmodel.getAllJobs();
      const job = allJobs.find((i) => {
        return i.id === id;
      });

      if (!job.applicants) {
        job.applicants = [];
      }
 
      if (!job) {
        return res.render("error-page", { message: "Job not found!" });
      }else{
      return res.render("job-listening", {  job });

      }

      // Pass the job data to the rendering template
    } catch (error) {
      console.error("Error retrieving job:", error);
      res.render("error-page", {
        message: "Oops, something went wrong while retrieving the job!",
      });
    }
  }
}

export default jobController;
