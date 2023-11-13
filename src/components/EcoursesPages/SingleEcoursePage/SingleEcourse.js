// Display details of a single eCourse.
// H selida pou emfanizetai otan patame sto Ecourses-->University.

import React, { useEffect } from "react";
import "./SingleEcourse.css";
import { Image } from "primereact/image";
import { EcoursesData } from "../../../mock-d/EcoursesData";
import Rating from "../../Ratings/Rating";
import { Link, useParams } from "react-router-dom";
import { Button } from "primereact/button";

function SingleEcourse() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts.
    window.scrollTo(0, 0);
  }, []);

  // Function called when clicking on Ecourses website button.
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const img = ["/images/thumbnail.png"];

  // component retrieves the id parameter from the URL using the useParams hook.
  // This id is used to identify the specific eCourse to display.
  const { id } = useParams();

  const courses = EcoursesData.getAllEcoursesData();

  // find method locates the eCourse with a matching id.
  // The found eCourse is stored in the course variable.
  const course = courses.find((course) => course.id === id);

  console.log("All exourses: ", courses);

  console.log("id clicked: ", id);

  // Similar courses data
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
    <div className="mt-2 pt-5 pb-5 justify-content-center border-2 surface-border border-round p-2 bg-white">
      <div className="course-container ">
        <h2>{course.title}</h2>
        {/* <Image src={course.image} alt="thumbnail" width="2500" /> */}
        <img src={course.image} alt={course.title} />
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
            {/* <p>course links</p> */}
            <br></br>
            <a onClick={() => openInNewTab(course.website)}>
              <Button
                icon="pi pi-external-link"
                className=" justify-content-center mb-2"
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
        <Rating courseId={course.id} />
      </div>
    </div>
  );
}

export default SingleEcourse;
