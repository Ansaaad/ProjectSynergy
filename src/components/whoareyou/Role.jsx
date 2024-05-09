import React from 'react';
import { Link } from 'react-router-dom';
import "./role.css";

export default function Role() {
  return (
    <div className="container">
      <div className="item section1">Content 1</div>
      <div className="item section2">Content 2</div>
      <div className="item section3">Content 3</div>
      <div className="item section4">Content 4</div>
      <div className="item section1">Content 5</div>
      <div className="item section2">
        <div className="content6">
          <h1>WHO ARE YOU?</h1>
          <div className="options">
            <div className="option">
              <h2>Teacher</h2>
              <div className="image-placeholder"></div> {/* Placeholder for teacher image */}
              <Link to="/teacher-login"> {/* Link to TeacherOption */}
                <button className="login-button">Login</button> {/* Login button for teacher */}
              </Link>
            </div>
            <div className="option">
              <h2>Student</h2>
              <div className="image-placeholder"></div> {/* Placeholder for student image */}
              <Link to="/Login"> {/* Link to TeacherOption */}
                <button className="login-button">Login</button> {/* Login button for teacher */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
