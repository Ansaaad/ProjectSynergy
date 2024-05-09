import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./EvaluationForm.module.css";



const EvaluationForm = () => {
    const { ProjectID } = useParams();
  const [formData, setFormData] = useState({
    SN: "",
    ProjectID: ProjectID,
    students: [{ collegeRollNo: "", name: "" }, { collegeRollNo: "", name: "" }, { collegeRollNo: "", name: "" }],
    projectTitle: "",
    reportMarks: "",
    presentationMarks: "",
    qaMarks: "",
    demoMarks: "",
    totalIndividualScore: "",
    comments: "",
  });
  useEffect(() => {

  }, [ProjectID]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form data
    setFormData({
      SN: "",
      ProjectID: ProjectID,
      collegeRollNo: "",
      name: "",
      projectTitle:"",
      reportMarks: "",
      presentationMarks: "",
      qaMarks: "",
      demoMarks: "",
      totalIndividualScore: "",
      comments: "",
    });
  };

  return (
    <div className={styles.formContainer}>
      <h3>Evaluate Project</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="SN">SN:</label>
          <input
            type="text"
            id="SN"
            name="SN"
            value={formData.SN}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="ProjectID">Project ID:</label>
          <input
            type="text"
            id="ProjectID"
            name="ProjectID"
            value={formData.ProjectID}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="collegeRollNo">College Roll No:</label>
          <input
            type="text"
            id="collegeRollNo"
            name="collegeRollNo"
            value={formData.collegeRollNo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="projectTitle">Project Title:</label>
          <input
            type="text"
            id="projectTitle"
            name="projectTitle"
            value={formData.projectTitle}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="reportMarks">Report Marks:</label>
          <input
            type="text"
            id="reportMarks"
            name="reportMarks"
            value={formData.reportMarks}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="presentationMarks">Presentation Marks:</label>
          <input
            type="text"
            id="presentationMarks"
            name="presentationMarks"
            value={formData.presentationMarks}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="qaMarks">Q&A Marks:</label>
          <input
            type="text"
            id="qaMarks"
            name="qaMarks"
            value={formData.qaMarks}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="demoMarks">Demo Marks:</label>
          <input
            type="text"
            id="demoMarks"
            name="demoMarks"
            value={formData.demoMarks}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="totalIndividualScore">Total Individual Score:</label>
          <input
            type="text"
            id="totalIndividualScore"
            name="totalIndividualScore"
            value={formData.totalIndividualScore}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            cols="50"
            value={formData.comments}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EvaluationForm;
