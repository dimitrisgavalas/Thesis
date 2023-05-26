//Test. H selida pou emfanizetai otan patame sto Ecourses-->Field.

import React, { useState, useEffect } from "react";
import "./EcourseMainPage.css";
import { EcoursesData } from "../../mock-d/EcoursesData";

function EcourseCard() {
  const [ecourse, setEcourse] = useState(EcoursesData);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">E-Courses</h1>
          <Card item={setEcourse} />
        </div>
      </div>
    </>
  );
}

export default EcourseCard;
