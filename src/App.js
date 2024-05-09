import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import CoordinatorSidebar from "./components/sidebar/CoordinatorSidebar";
import TeacherSidebar from "./components/sidebar/TeacherSidebar";
import Login from "./components/login/Login";
import LandingPage from "./components/landingPage/LandingPage";
import ProjectForm from "./components/project/ProjectForm";
import Role from "./components/whoareyou/Role"; // Import Role.jsx
import sidebarStyles from "./components/sidebar/sidebar.module.css";
import Footer from "./components/footer/Footer";
import Frontpage from "./components/frontpage/Frontpage";
import TeacherLogin from "./components/login/TeacherLogin";
import Teacher from "./components/Teacher/Teacher";
import RegisteredGroups from "./components/Teacher/RegisteredGroups";
import EvaluationForm from "./components/Teacher/EvaluationForm";
import GroupsToSupervise from "./components/Teacher/GroupsToSupervise";
import CoordinatorPage from "./components/Teacher/CoordinatorPage";
import Profile from "./components/Profile/Profile";
import Notice from "./components/Teacher/Notice";
import AssignSupervisor from "./components/Teacher/AssignSupervisor";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const location = useLocation();
  const [userRole, setUserRole] = useState("");
 
  useEffect(() => {
    const updatePageTitle = (path) => {
      switch (path) {
        case "/dashboard":
          return "Dashboard";
        case "/projects":
          return "Project Form";
        default:
          return "Home";
      }
    };

    setPageTitle(updatePageTitle(location.pathname));
  }, [location]);

  // const isFrontpage = location.pathname === "/frontpage";

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

   // Determine user role based on path
   useEffect(() => {
    // Example logic to determine user role based on path
    const path = location.pathname.toLowerCase();
    if (path.includes("/coordinator")) {
      setUserRole("coordinator");
    } else if (path.includes("/teacher")) {
      setUserRole("teacher");
    } else {
      setUserRole(""); // Default role if not in /coordinator or /teacher path
    }
  }, [location.pathname]);


  return (
    <div>
      <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
        <div
          className={
            sidebarOpen
              ? `${sidebarStyles.contentShift} ${sidebarStyles.content}`
              : sidebarStyles.content
          }
        >
          
  <>
    <Navbar
      title={pageTitle}
      open={sidebarOpen}
      handleToggle={handleToggleSidebar}
    />
    
  </>

          {/* Conditionally render the appropriate sidebar based on user role */}
          {userRole === "coordinator" ? (
            <CoordinatorSidebar />
          ) : userRole === "teacher" ? (
            <TeacherSidebar />
          ) : (
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          )}
          <Routes>
          <Route path="/" element={<Frontpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="/projects" element={<ProjectForm />} />
            <Route path="/whoareyou" element={<Role />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/teacher-login" element={<TeacherLogin />} />
            <Route path="/Teacher" element={<Teacher/>} />
            <Route path="/RegisteredGroups" element={<RegisteredGroups/>} />
            <Route path="/EvaluationForm/:projectId" element={<EvaluationForm />} />
            <Route path="/GroupsToSupervise" element={<GroupsToSupervise/>} />
            <Route path="/CoordinatorPage" element={<CoordinatorPage/>} />
            <Route path="/Profile" element={<Profile/>} />
            <Route path="/Notice" element={<Notice/>} />
            <Route path="/AssignSupervisor" element={<AssignSupervisor/>} />
            
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;