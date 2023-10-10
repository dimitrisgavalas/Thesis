// edw vazoume ta components olwn twn ecourses pou emfanizode
import React, { useState, useEffect } from "react";
import EcoursesGrid from "./Ecoursegrid";
import { EcoursesData } from "../../mock-d/EcoursesData"; // Import your data

function EcourseCard() {
  // Fetch or create your object array
  const [ecoursesData, setEcoursesData] = useState([]);

  // const ecoursesData = EcoursesData.getAllEcourses();
  console.log(ecoursesData);

  useEffect(() => {
    // Fetch your data asynchronously and set it when the Promise resolves
    EcoursesData.getAllEcourses().then((data) => {
      console.log(data); // Log the resolved data
      setEcoursesData(data);
    });
  }, []);

  // const [ecourse, setEcourse] = useState(EcoursesData);
  return (
    <>
      <div className="border-1 surface-border border-round  ">
        <h1 className="col-12 text-center my-3 fw-bold">E-Courses</h1>
        <EcoursesGrid
          ecoursesData={ecoursesData}
          // onToggleFavorite={handleToggleFavorite}
        />
      </div>
    </>
  );
}

export default EcourseCard;
