// Notice.jsx
import React, { useState } from 'react';
import styles from './Notice.module.css';

function Notice() {
    const [noticeContent, setNoticeContent] = useState('');
    const [recipient, setRecipient] = useState('students');

    const handleNoticeChange = (event) => {
        setNoticeContent(event.target.value);
    };

    const handleRecipientChange = (event) => {
        setRecipient(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can implement the logic to send the notice
        console.log(`Sending notice to ${recipient} with content: ${noticeContent}`);
        // Clear the notice content after submission
        setNoticeContent('');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>Write Notice</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.selectContainer}>
                    <label className={styles.label}>Recipient:</label>
                    <select className={styles.select} value={recipient} onChange={handleRecipientChange}>
                        <option value="students">Students</option>
                        <option value="teachers">Teachers</option>
                    </select>
                </div>
                <div className={styles.textareaContainer}>
                    <label className={styles.label}>Notice:</label>
                    <textarea
                        className={styles.textarea}
                        rows="6"
                        placeholder="Write your notice here..."
                        value={noticeContent}
                        onChange={handleNoticeChange}
                    ></textarea>
                </div>
                <button type="submit" className={styles.button}>Send Notice</button>
            </form>
        </div>
    );
}

export default Notice;
