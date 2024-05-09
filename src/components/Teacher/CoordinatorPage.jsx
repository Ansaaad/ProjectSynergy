import React from 'react';
import styles from "./CoordinatorPage.module.css";
import { Link } from 'react-router-dom';


function CoordinatorPage() {
    // Function to handle assigning teachers as supervisors and evaluators
    const handleAssignSupervisor = (groupId) => {
        // Implement your logic for assigning teachers here
        console.log(`Assigning teachers for group with ID: ${groupId}`);
    };

    const handleViewGroups = () => {
        // Implement your logic to view groups registered by students
        console.log("Viewing groups registered by students");
    };

    const handleViewReports = () => {
        // Implement your logic to view reports submitted by students
        console.log("Viewing reports submitted by students");
    };

    return (
        <div className={styles.container}>
            

            {/* Provide Notices Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Provide Notices to Students</h2>
                <Link to="/Notice" className={styles.buttonLink} onClick={handleViewGroups}>Click Here</Link>
                    
                
            </section>

            {/* View Groups Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>View Group Registered by Students.</h2>
                <Link to="/RegisteredGroups" className={styles.buttonLink} onClick={handleViewGroups}>View Groups</Link>
            </section>

            {/* View Reports Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>View Report Submitted by Students.</h2>
                <button className={styles.button} onClick={handleViewReports}>View Reports</button>
            </section>

            {/* Assign Teachers Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Assign Supervisor To Registered Groups.</h2>
                <Link to="/AssignSupervisor"  className={styles.buttonLink} onClick={handleAssignSupervisor}>Assign Supervisor</Link>              
            </section>
        </div>
    );
}

export default CoordinatorPage;
