import React from "react";
import "./EcourseCard.css";

function EcourseCard({ course }) {
  return (
    <div className="ecourse-card">
      <h3>{course.title}</h3>
      <p>Duration: {course.duration}</p>
      <p>Price: {course.price}</p>
      <p>Summary: {course.summary}</p>
      <p>Start date: {course.startDate}</p>
      <p>Professors: {course.professors.join(", ")}</p>
      {/* Add social accounts links */}
    </div>
  );
}

export default EcourseCard;
