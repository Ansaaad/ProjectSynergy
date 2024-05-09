import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./components/login/Login";
import LandingPage from "./components/landingPage/LandingPage";
import ProjectForm from "./components/project/ProjectForm";
import Role from "./components/whoareyou/Role"; // Import Role.jsx
import sidebarStyles from "./components/sidebar/sidebar.module.css";
import Footer from "./components/footer/Footer";
import Frontpage from "./components/frontpage/Frontpage";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const location = useLocation();
 
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

  // console.log("isFrontpage:", isFrontpage); // Log the value of isFrontpage

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

          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          <Routes>
          <Route path="/" element={<Frontpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<LandingPage />} />
            <Route path="/projects" element={<ProjectForm />} />
            <Route path="/whoareyou" element={<Role />} />
            <Route path="*" element={<Navigate to="/" />} />
            
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;