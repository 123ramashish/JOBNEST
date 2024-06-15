const currentDate = new Date();
const futureDate = new Date(currentDate.setDate(currentDate.getDate() + 25));

export class jobModel {
  constructor(
    id,
    jobcategory,
    jobdestination,
    joblocation,
    companyname,
    salary,
    applyby,
    skillsrequired,
    numberofopenings,
    jobposted,
    applicants
  ) {
    this.id = id;
    this.jobcategory = jobcategory;
    this.jobdestination = jobdestination;
    this.joblocation = joblocation;
    this.companyname = companyname;
    this.salary = salary;
    this.applyby = applyby;
    this.skillsrequired = skillsrequired;
    this.numberofopenings = numberofopenings;
    this.jobposted = jobposted;
    this.applicants = applicants;
  }

  getAllJobs() {
    return jobs;
  }

  addJob(
    jobcategory,
    jobdestination,
    joblocation,
    companyname,
    salary,
    applyby,
    skillsrequired,
    numberofopenings,
    jobposted,
    applicants
  ) {
    // Assuming some validation is performed before adding the job
    const newJob = new jobModel(
      jobs.length + 1,
      jobcategory,
      jobdestination,
      joblocation,
      companyname,
      salary,
      applyby,
      skillsrequired,
      numberofopenings,
      jobposted,
      applicants
    );
    jobs.push(newJob);
    return jobs;
  }
}

const jobs = [
  {
    id: 1,
    jobcategory: "Tech",
    jobdestination: "Full Stack Developer",
    joblocation: "Bangalore",
    companyname: "Tech Innovations",
    salary: " 6,00,000 - 8,00,000 LPA",
    applyby: futureDate.toISOString(),
    skillsrequired: ["JavaScript", "React", "Node.js", "MongoDB"],
    numberofopenings: 3,
    jobposted: "2024-03-01",
    applicants: [
      "raj.kumar@example.com",
      "mary@example.com",
      "peter@example.com",
    ],
  },
  {
    id: 2,
    jobcategory: "Non-Tech",
    jobdestination: "Digital Marketing Manager",
    joblocation: "Mumbai",
    companyname: "Marketing Hub",
    salary: " 4,50,000 - 6,00,000 LPA",
    applyby: futureDate.toISOString(),
    skillsrequired: ["Social Media Marketing", "Analytics", "SEO", "SEM"],
    numberofopenings: 2,
    jobposted: "2024-03-02",
    applicants: ["seeta.sharma@example.com", "charlie@example.com"],
  },
  {
    id: 3,
    jobcategory: "Tech",
    jobdestination: "Data Analyst",
    joblocation: "Delhi",
    companyname: "Data Insights",
    salary: " 5,50,000 - 7,50,000 LPA",
    applyby: futureDate.toISOString(),
    skillsrequired: [
      "Python",
      "SQL",
      "Data Visualization",
      "Statistical Analysis",
    ],
    numberofopenings: 1,
    jobposted: "2024-03-03",
    applicants: ["mohan.joshi@example.com", "emily@example.com"],
  },
];

export default jobModel;
