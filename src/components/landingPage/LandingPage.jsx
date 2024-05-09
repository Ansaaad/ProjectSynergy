import React from "react";
import backgroundImg from "../../assets/images/backgrond.jpg";
import styles from "./landingPage.module.css";
import LandingPageCard from "./LandingPageCard";

const LandingPage = () => {
  const mainContentStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className={styles.fullContainer}>
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
      <div className={styles.landingCard}>
        <LandingPageCard
          title="View Profile"
          description="View profile information. View your academic details, contact information, and other personal data."
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfKKQjnQuDakncTZEjmrXZIWid1r-sx6ONfA&usqp=CAU"
          imageTitle="View Profile"
        />
        <LandingPageCard
          title="Project Upload"
          description="Upload your project files here. Ensure all necessary documents are included before submission."
          imageUrl="https://img.freepik.com/free-vector/online-image-upload-landing-page_23-2148282428.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713398400&semt=ais"
          imageTitle="Project Upload"
        />
        <LandingPageCard
          title="View Marks"
          description="Check your grades and feedback for all submitted assignments and projects. Stay updated with your academic progress."
          imageUrl="https://img.freepik.com/premium-vector/back-view-businessman-looking-question-marks_77417-1081.jpg"
          imageTitle="View Marks"
        />
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
};

export default LandingPage;
