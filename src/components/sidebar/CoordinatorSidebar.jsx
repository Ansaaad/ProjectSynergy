import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FolderIcon from '@mui/icons-material/Folder';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';
import styles from './sidebar.module.css';

function CoordinatorSidebar({ open, setOpen }) {
    const handleDrawerClose = () => {
        setOpen(false); // Close the drawer
    };

    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            classes={{ paper: styles.drawerPaper }}
        >
            <List>
                <ListItem style={{marginTop:"15px"}}>
                    <ListItemIcon><SchoolIcon /></ListItemIcon>
                    <ListItemText primary="NEC-PM" />
                </ListItem>
                <ListItem button component={Link} to="/Teacher" style={{marginTop:"50px"}}>
                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to="/profile">
                    <ListItemIcon><PersonIcon /></ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button component={Link} to="/projects">
                    <ListItemIcon><CloudUploadIcon /></ListItemIcon>
                    <ListItemText primary="Notify Students" />
                </ListItem>
                <ListItem button component={Link} to="/my-projects">
                    <ListItemIcon><FolderIcon /></ListItemIcon>
                    <ListItemText primary="Notify Teachers" />
                </ListItem>
            </List>
        </Drawer>
    );
}

export default CoordinatorSidebar;
