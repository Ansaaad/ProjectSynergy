import React, { useState } from 'react';
import backgroundImg from "../../assets/images/backgrond.jpg";
import styles from "./Teacher.module.css";
import TeacherCard from "./TeacherCard";
import RegisteredGroups from "./RegisteredGroups";
import GroupsToSupervise from "./GroupsToSupervise";
import CoordinatorPage from "./CoordinatorPage";
import TeacherSidebar from "../sidebar/TeacherSidebar";

function Teacher() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
  };

  const mainContentStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className={styles.fullContainer}>
      <TeacherSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className={styles.container}>
        <main className={styles.mainContent} style={mainContentStyle}>
          <div className={styles.overlay}></div>
          <section className={styles.hero}>
            <h2 className={styles.heroTitle}>Creating a smooth platform for your project.</h2>
            <p className={styles.heroText}>
              Connect with your school today. Start your application process in
              4 steps.
            </p>
            <button className={styles.heroBtn}>Get Started</button>
          </section>
        </main>
      </div>

      <div className={styles.cardContainer}>
        <TeacherCard
          title="Coordinate Project"
          description="Coordinate the entire project."
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfKKQjnQuDakncTZEjmrXZIWid1r-sx6ONfA&usqp=CAU"
          imageTitle="View Profile"
          navigateToCoordinatorPage={true}
          >
            <CoordinatorPage/>
        </TeacherCard>
        <TeacherCard
          title="Evaluate Project"
          description="Evaluate student's projects here."
          imageUrl="https://img.freepik.com/free-vector/online-image-upload-landing-page_23-2148282428.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713398400&semt=ais"
          imageTitle="Project Evaluation"
          navigateToRegisteredGroups={true}
          >
          <RegisteredGroups />
        </TeacherCard>
        <TeacherCard
          title="Supervise Project"
          description="Supervise the project of assigned groups."
          imageUrl="https://img.freepik.com/premium-vector/back-view-businessman-looking-question-marks_77417-1081.jpg"
          imageTitle="View Marks"
          navigateToGroupsToSupervise={true}
          >
            <GroupsToSupervise /> 
          </TeacherCard>
      </div>

      <div className={styles.aboutUsContainer}>
        <div className={styles.featuredSchoolsHeader}>
          <h3>About Us</h3>
        </div>
        <p>
          Welcome to our platform, a dedicated space designed to streamline the project submission and grading process for students and teachers alike. Our mission is to facilitate seamless interaction between students and educators, enhancing the learning experience through efficient project management and evaluation. From the moment students upload their projects to the time teachers provide their feedback and grades, we are here to support and simplify every step of the educational journey. We believe that a robust educational platform empowers both teaching and learning, and our goal is to provide the tools necessary to make managing educational tasks as straightforward as possible. Dive in and discover how easy and effective educational collaboration can be!
        </p>
      </div>
    </div>
  );
}

export default Teacher;
