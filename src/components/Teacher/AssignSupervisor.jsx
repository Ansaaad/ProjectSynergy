// AssignSupervisor.jsx
import React, { useState } from 'react';
import styles from './AssignSupervisor.module.css';

function AssignSupervisor() {
    // Dummy data for registered groups and teachers
    const registeredGroups = ['Group 1', 'Group 2', 'Group 3'];
    const teachers = ['Teacher 1', 'Teacher 2', 'Teacher 3'];

    const [selectedGroup, setSelectedGroup] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState('');

    const handleGroupChange = (event) => {
        setSelectedGroup(event.target.value);
    };

    const handleTeacherChange = (event) => {
        setSelectedTeacher(event.target.value);
    };

    const handleAssign = () => {
        // Implement your logic for assigning supervisor here
        console.log(`Assigning ${selectedTeacher} as supervisor to ${selectedGroup}`);
        // Clear selections after assignment
        setSelectedGroup('');
        setSelectedTeacher('');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>Assign Supervisor</h1>
            <div className={styles.assignmentForm}>
                <div className={styles.selectContainer}>
                    <label className={styles.label}>Select Group:</label>
                    <select className={styles.select} value={selectedGroup} onChange={handleGroupChange}>
                        <option value="">Select Group</option>
                        {registeredGroups.map((group, index) => (
                            <option key={index} value={group}>{group}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.selectContainer}>
                    <label className={styles.label}>Select Teacher:</label>
                    <select className={styles.select} value={selectedTeacher} onChange={handleTeacherChange}>
                        <option value="">Select Teacher</option>
                        {teachers.map((teacher, index) => (
                            <option key={index} value={teacher}>{teacher}</option>
                        ))}
                    </select>
                </div>
                <button className={styles.button} onClick={handleAssign} disabled={!selectedGroup || !selectedTeacher}>
                    Assign Supervisor
                </button>
            </div>
        </div>
    );
}

export default AssignSupervisor;
