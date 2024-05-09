import React from "react";
import { Link } from "react-router-dom";
import styles from "./GroupsToSupervise.module.css";

const GroupsToSupervise = () => {
  // Dummy data for demonstration
  const GroupsToSupervise = [
    {
      SN: 1,
      ProjectID: "P001",
      students: [
        { collegeRollNo: "020305", name: "Anusha Dhakal" },
        { collegeRollNo: "020319", name: "Nandani Luitel" },
        { collegeRollNo: "020329", name: "Prativa Aryal" }
      ],
      projectTitle: "ProjectSynergy",
    },
    {
      SN: 2,
      ProjectID: "P002",
      students: [
        { collegeRollNo: "020324", name: "Pooja Phuyal" },
        { collegeRollNo: "020327", name: "Prasiddha Shiwakoti" },
        { collegeRollNo: "020341", name: "Yunish" }
      ],
      projectTitle: "project2",
    }
  ];

  return (
    <div className={styles.tableContainer}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>SN</th>
          <th>Project ID</th>
          <th>College Roll No</th>
          <th>Name of Students</th>
          <th>Project Title</th>
        </tr>
      </thead>
      <tbody>
        {GroupsToSupervise.map((group) => (
          <tr key={group.SN}>
            <td>{group.SN}</td>
            <td>{group.ProjectID}</td>
            <td>
              {group.students.map((student, index) => (
                <div key={index}>{student.collegeRollNo}</div>
              ))}
            </td>
            <td>
              {group.students.map((student, index) => (
                <div key={index}>{student.name}</div>
              ))}
            </td>
            <td>
                {/* Link to EvaluationForm with the respective project ID */}
                <Link to={`/EvaluationForm/${group.ProjectID}`}>{group.projectTitle}</Link>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
};

export default GroupsToSupervise;