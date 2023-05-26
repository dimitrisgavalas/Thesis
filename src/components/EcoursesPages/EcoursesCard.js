// edw vazoume ta components olwn twn ecourses pou emfanizode
import React, { useState, useEffect } from "react";
import EcoursesGrid from "./Ecoursegrid";

function EcourseCard() {
  // const [ecourse, setEcourse] = useState(EcoursesData);
  return (
    <>
      <div className="border-1 surface-border border-round p-4 m-2">
        <h1 className="col-12 text-center my-3 fw-bold">E-Courses</h1>
        <EcoursesGrid />
      </div>
    </>
  );
}

export default EcourseCard;
