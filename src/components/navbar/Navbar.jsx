import React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; 
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import styles from './navbar.module.css';

function Navbar({ title, open, handleToggle }) {
    const navigate = useNavigate();
    const currentLocation = useLocation(); // Rename 'location' to 'currentLocation'

    const handleLogout = () => {
        navigate('/login');
    };

    const isFrontpage = currentLocation.pathname === "/frontpage"; // Determine if on frontpage
    const isRootOrLogin = currentLocation.pathname === "/" || currentLocation.pathname === "/login" || currentLocation.pathname === "/whoareyou" ;// Determine if on root or login page

    return (
        <>
            {!isRootOrLogin && ( // Render Navbar if not on root or login page
                <AppBar position="static" style={{ backgroundColor: '#3C5B6F' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleToggle}
                            className={styles.menuButton}
                        >
                            {open ? <ChevronLeftIcon /> : <MenuIcon />}
                        </IconButton>
                        <div className={styles.flexGrow} />
                        <Typography variant="h6" className={styles.title}>
                            {title}
                        </Typography>
                        <div className={styles.flexGrow} />

                        <Button
                            color="inherit"
                            onClick={handleLogout}
                            className={styles.logoutButton}
                            disabled={isFrontpage} // Disable the button when on frontpage
                        >
                            <ExitToAppIcon />
                        </Button>
                    </Toolbar>
                </AppBar>
            )}
        </>
    );
}

export default Navbar;

