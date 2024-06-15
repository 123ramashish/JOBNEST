// Initial set of applicants
const applicants = [
  {
    applicantid: 1,
    name: "Raj Kumar",
    email: "raj.kumar@example.com",
    contact: "+91 98765 43210",
    resumePath: "/resumes/raj_kumar_resume.pdf",
  },
  {
    applicantid: 2,
    name: "Seeta Sharma",
    email: "seeta.sharma@example.com",
    contact: "+91 98765 43211",
    resumePath: "/resumes/seeta_sharma_resume.pdf",
  },
  {
    applicantid: 3,
    name: "Mohan Joshi",
    email: "mohan.joshi@example.com",
    contact: "+91 98765 43212",
    resumePath: "/resumes/mohan_joshi_resume.pdf",
  },
];

export default class applicantModel {
  constructor(applicantid, name, email, contact, resumePath) {
    this.applicantid = applicantid;
    this.name = name;
    this.email = email;
    this.contact = contact;
    this.resumePath = resumePath;
  }

   getApplicants() {
    return applicants;
  }

   addApplicant(name, email, contact, resumePath) {
    // Assuming some validation is performed before adding the applicant
    const newApplicant = new applicantModel(
      applicants.length + 1,
      name,
      email,
      contact,
      resumePath
    );
    applicants.push(newApplicant);
    return applicants;
  }
}
