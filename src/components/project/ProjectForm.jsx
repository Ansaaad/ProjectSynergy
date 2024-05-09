import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import {
  TextField,
  Button,
  List,
  ListItem,
  IconButton,
  Input,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import dashboardStyles from "../sidebar/sidebar.module.css";
import formStyles from "./projectForm.module.css";

function ProjectForm() {
  const [emails, setEmails] = useState([""]);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [file, setFile] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
          const response = await fetch('/token');
          const data = await response.json();
          const csrfToken = data.token;
          console.log('CSRF Token:', csrfToken); // Log CSRF token
          setCsrfToken(csrfToken); // Update the state with the fetched CSRF token
          console.log('CSRF Token State:', csrfToken); // Log CSRF token state
      } catch (error) {
          console.error("Error fetching CSRF token:", error);
          // Handle error
      }
  };
  

    fetchCsrfToken();
}, []);


  const handleEmailChange = (index, event) => {
    const newEmails = [...emails];
    newEmails[index] = event.target.value;
    setEmails(newEmails);
  };

  const addEmailField = () => {
    if (emails.length < 3) {
      setEmails([...emails, ""]);
    }
  };

  const removeEmailField = (index) => {
    const newEmails = [...emails];
    newEmails.splice(index, 1);
    setEmails(newEmails);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Construct the data object
    const data = {
      projectName: projectTitle,
      projectDescription: projectDescription,
      studentEmails: emails,
    };

    // Make a POST request using fetch
    fetch("http://localhost:8000/projects", {
      method: "POST",
      headers: {
        "X-CSRF-TOKEN": csrfToken,
        "Content-Type": "application/json",
        "Accept":'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Project created successfully:", data);
        // Add any further logic here
      })
      .catch((error) => {
        console.error("There was an error creating the project:", error);
        // Handle error appropriately
      });
  };

  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <form onSubmit={handleSubmit} className={formStyles.formContainer}>
        
        <TextField
          label="Project Title"
          variant="outlined"
          fullWidth
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          className={formStyles.inputField}
        />
        <TextField
          label="Project Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          className={formStyles.inputField}
        />
        <List>
          {emails.map((email, index) => (
            <ListItem key={index} className={formStyles.listItem}>
              <TextField
                label="Team Member Email"
                variant="outlined"
                value={email}
                onChange={(e) => handleEmailChange(index, e)}
                className={formStyles.emailInput}
              />
              <IconButton
                onClick={() => removeEmailField(index)}
                disabled={emails.length === 1}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
          <Button
            startIcon={<AddIcon />}
            onClick={addEmailField}
            className={formStyles.addButton}
            disabled={emails.length >= 3} // Disable the button if there are 2 or more emails
          >
            {" "}
            Add Team Member
          </Button>
        </List>
        <Input
          type="file"
          onChange={handleFileChange}
          className={formStyles.inputField}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={formStyles.submitButton}
        >
          Submit Project
        </Button>
      </form>
    </Box>
  );
}

export default ProjectForm;
