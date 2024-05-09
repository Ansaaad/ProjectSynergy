import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import styles from './login.module.css';

function TeacherLogin() {
    let navigate = useNavigate();  // Hook to navigate to different routes

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/Teacher');  // Navigate to the Dashboard page upon form submission
    };

    return (
        <div className={styles.loginContainer}>
<Typography variant="h4" component="h1" className={styles.title} style={{ padding: "0 0 70px 0" }}>
    PROJECT MANAGEMENT SYSTEM - NEC
</Typography>

            <form onSubmit={handleSubmit} className={styles.form}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    className={styles.textField}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    required
                    className={styles.textField}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={styles.submitButton}
                >
                    Login As Teacher
                </Button>
            </form>
        </div>
    );
}

export default TeacherLogin;
