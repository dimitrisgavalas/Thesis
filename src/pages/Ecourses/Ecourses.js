import React from "react";
import "./Ecourse.css";
import { Image } from "primereact/image";

function Ecourses() {
  const img = ["images/thumbnail.png"];

  // Sample course data, you can replace this with data fetched from an API or database
  const course = {
    id: 1,
    title: "Introduction to Artificial Intelligence",
    image: img,
    university: "University of Piraeus",
    professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
    duration: "12 weeks",
    ECTS: 6,
    rating: 4.5,
    price: "$999",
    mode: "Online",
    description:
      "This is a comprehensive introduction to the field of artificial intelligence, covering topics such as machine learning, robotics, and natural language processing.",
  };

  // Sample similar courses data
  const similarCourses = [
    {
      id: 2,
      title: "Machine Learning for Beginners",
      image: img,
    },
    {
      id: 3,
      title: "Networks",
      image: img,
    },
  ];

  return (
    <div className="course ">
      <div className="course-container p-image-preview-container	">
        <h2>{course.title}</h2>
        <Image src={img} alt="thumbnail" width="2500" />
        {/* <img src={course.image} alt={course.title} /> */}
        <div className="course-info">
          <div className="quick-info">
            <p>
              <strong>University:</strong> {course.university}
            </p>
            <p>
              <strong>Professors:</strong> {course.professors.join(", ")}
            </p>
            <p>
              <strong>Duration:</strong> {course.duration}
            </p>
            <p>
              <strong>ECTS:</strong> {course.ECTS}
            </p>
            <p>
              <strong>Rating:</strong> {course.rating}
            </p>
            <p>
              <strong>Price:</strong> {course.price}
            </p>
            <p>
              <strong>Mode:</strong> {course.mode}
            </p>
          </div>
          <div className="description">
            <p>{course.description}</p>
          </div>
        </div>
        <div className="contact-university">
          <h3>Contact University</h3>
          {/* Add your contact form or contact information here */}
        </div>
        <div className="similar-courses">
          <h3>Similar Courses</h3>
          <div className="similar-courses-grid">
            {similarCourses.map((similarCourse) => (
              <div key={similarCourse.id} className="similar-course">
                <h4>{similarCourse.title}</h4>
                <img src={similarCourse.image} alt={similarCourse.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecourses;
