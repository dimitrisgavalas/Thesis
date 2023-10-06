// edw vazoume ta components olwn twn ecourses pou emfanizode
import React, { useState, useEffect } from "react";
import EcoursesGrid from "../EcoursesPages/Ecoursegrid";
import { EcoursesData } from "../../mock-d/EcoursesData"; // Import your data

function EcourseCardHome() {
  // Fetch or create your object array
  const [ecoursesData, setEcoursesData] = useState([]);

  // const ecoursesData = EcoursesData.getAllEcourses();
  console.log(ecoursesData);

  useEffect(() => {
    // Fetch your data asynchronously and set it when the Promise resolves
    EcoursesData.getEcoursesHomePage().then((data) => {
      console.log(data); // Log the resolved data
      setEcoursesData(data);
    });
  }, []);

  // Define a function to handle toggling favorites
  const handleToggleFavorite = (ecourse) => {
    // Implement your favorite toggle logic here
  };

  // const [ecourse, setEcourse] = useState(EcoursesData);
  return (
    <>
      <div className="border-1 surface-border border-round  ">
        <h2 className="col-12 text-center my-3 fw-bold">Trending Courses</h2>
        <EcoursesGrid
          ecoursesData={ecoursesData}
          // onToggleFavorite={handleToggleFavorite}
        />
      </div>
    </>
  );
}

export default EcourseCardHome;

// import React from "react";

// function EcourseCard({ course }) {
//   return (
//     <div className="ecourse-card">
//       <h3>{course.title}</h3>
//       <p>Duration: {course.duration}</p>
//       <p>Price: {course.price}</p>
//       <p>Summary: {course.summary}</p>
//       <p>Start date: {course.startDate}</p>
//       <p>Professors: {course.professors.join(", ")}</p>
//       {/* Add social accounts links */}
//     </div>
//   );
// }

// export default EcourseCard;
