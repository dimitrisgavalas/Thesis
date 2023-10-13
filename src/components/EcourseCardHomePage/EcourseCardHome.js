//  rendering a list of trending courses on Home Page
import React, { useState, useEffect } from "react";
import EcoursesGrid from "../EcoursesPages/Ecoursegrid";
import { EcoursesData } from "../../mock-d/EcoursesData"; // Import your data

function EcourseCardHome() {
  // initialized using the useState hook as an empty array
  // will hold the data of eCourses that will be displayed on the Home Page.
  const [ecoursesData, setEcoursesData] = useState([]);

  useEffect(() => {
    // Fetch your data asynchronously and set it when the Promise resolves
    EcoursesData.getEcoursesHomePage().then((data) => {
      console.log(data); // Log the resolved data
      setEcoursesData(data);
    });
  }, []);
  console.log("Home Trending Courses Array ", ecoursesData);
  return (
    <>
      <div className="border-1 surface-border border-round  ">
        <h2 className="col-12 text-center my-3 fw-bold">Trending Courses</h2>
        <EcoursesGrid ecoursesData={ecoursesData} />
      </div>
    </>
  );
}

export default EcourseCardHome;
