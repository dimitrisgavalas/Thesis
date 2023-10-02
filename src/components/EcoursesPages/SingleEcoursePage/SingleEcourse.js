//Test. H selida pou emfanizetai otan patame sto Ecourses-->University.

import React, { useState, useEffect } from "react";
import "./SingleEcourse.css";
import { Image } from "primereact/image";
import { EcoursesData } from "../../../mock-d/EcoursesData";
import notes from "../../../mock-d/notes";
import Note from "./Note";
import Rating from "../../Ratings/Rating";
import { Link, useParams } from "react-router-dom";
import { Button } from "primereact/button";

function SingleEcourse() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [similarEcourses, setEcourses] = useState([]);
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const img = ["/images/thumbnail.png"];
  const { id } = useParams();

  const courses = EcoursesData.getAllEcoursesData();

  const course = courses.find((course) => course.id === id);

  console.log(courses);
  console.log(id);

  // Sample similar courses data
  const similarCourses = [
    {
      id: 1026,
      title: "ReactJs Basics",
      image: img,
    },
    {
      id: 1027,
      title: "Build a Game in 30 days",
      image: img,
    },
  ];

  return (
    <div className="m-2 pt-5 pb-5 justify-content-center border-2 surface-border border-round p-2 ">
      <div className="course-container ">
        <h2>{course.title}</h2>
        <Image src={course.image} alt="thumbnail" width="2500" />
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
            {/* <p>
              <strong>Rating:</strong> {course.rating}
            </p> */}
            <p>
              <strong>Price:</strong> {course.price}
            </p>
            <p>
              <strong>Location:</strong> {course.ecourseLocation}
            </p>
          </div>
          <div className="description m-2 pt-5 pb-5 justify-content-center border-2 surface-border border-round p-2 ">
            <p>{course.description}</p>
          </div>
        </div>
        <div className="similar-courses m-2 flex justify-content-center border-2 surface-border border-round p-2">
          <div className=" ">
            <h3>Contact University </h3>
            <p>course links</p>
            <br></br>
            <a onClick={() => openInNewTab(course.website)}>
              <Button
                icon="pi pi-external-link"
                className=" justify-content-center"
              />
            </a>
          </div>
          {/* Contact Info*/}
        </div>
        <div className="similar-courses mt-5">
          <h3>Similar Courses</h3>

          <div className="similar-courses-grid">
            {similarCourses.map((similarCourse) => (
              <div key={similarCourse.id} className="similar-course">
                <Link to={`/singleEcourse/${similarCourse.id}`}>
                  <h4>{similarCourse.title}</h4>
                  <img src={similarCourse.image} alt={similarCourse.title} />
                </Link>
              </div>
            ))}
          </div>
          {/* **************************************************** */}
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

{
  /* <>
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
// })}
// </div>
// </>; */}

// Sample course data,  Will replace with mock data from mock-d in the future
// const course = {
//   id: 1,
//   title: "Introduction to Artificial Intelligence",
//   image: img,
//   university: "University of Piraeus",
//   professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
//   duration: "12 weeks",
//   ECTS: 6,
//   rating: 4.5,
//   price: "$999",
//   mode: "Online",
//   description:
// "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
// };
