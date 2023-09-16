//Test. H selida pou emfanizetai otan patame sto Ecourses-->University.

import React from "react";
import "./SingleEcourse.css";
import { Image } from "primereact/image";
import { EcoursesData } from "../../../mock-d/EcoursesData";
import notes from "../../../mock-d/notes";
import Note from "./Note";
import Rating from "../../Ratings/Rating";

function SingleEcourse() {
  const img = ["images/thumbnail.png"];

  // Sample course data,  Will replace with mock data from mock-d in the future
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
    <div className="m-2 pt-5 pb-5 justify-content-center border-2 surface-border border-round p-2 ">
      <div className="course-container p-image-preview-container	">
        <h2>{course.title}</h2>
        <Image src={img} alt="thumbnail" width="2500" />
        {/* <img src={course.image} alt={course.title} /> */}
        <div className="course-info ">
          <div className="quick-info m-2 pt-5 pb-5 justify-content-center border-2 surface-border border-round p-2 ">
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
          <div className="description m-2 pt-5 pb-5 justify-content-center border-2 surface-border border-round p-2 ">
            <p>{course.description}</p>
          </div>
        </div>
        <div className="contact-university m-2 pt-5 pb-5 justify-content-center border-2 surface-border border-round p-2 ">
          <h3>Contact University</h3>
          {/* Contact Info*/}
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
          {/* **************************************************** */}
          <div className="m-2 pt-5 pb-5 justify-content-center border-2 surface-border border-round p-2 ">
            <h2>Comments</h2>
            {notes.map((noteItem) => {
              {
                /* <Note
                key={noteItem.key}
                title={noteItem.title}
                content={noteItem.content}
              />; */
              }
            })}
          </div>
        </div>
      </div>
      <Rating />
    </div>
  );
}

export default SingleEcourse;

// id: ,
// title: "",
// image: ,
// university: "",
// professors: ["", ""],
// duration: "",
// ECTS: ,
// rating: ,
// price: "",
// mode: "",
// description:""
