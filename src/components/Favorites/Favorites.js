import React, { useState, useEffect } from "react";
import EcoursesGrid from "../EcoursesPages/Ecoursegrid";
import { EcoursesData } from "../../mock-d/EcoursesData";

function Favorites() {
  const [favoriteCourses, setFavoriteCourses] = useState([]);

  useEffect(() => {
    EcoursesData.getLocalStorageFavoritesData().then((data) => {
      setFavoriteCourses(data);
    });
  }, []);

  const allCourses = EcoursesData.getAllEcoursesData();

  const favCourse = favoriteCourses
    .map((courseId) => allCourses.find((course) => course.id === courseId))
    .filter((ecourse) => ecourse !== undefined);
  console.log("Fav Array ", favCourse);
  return (
    <>
      <div className="border-1 surface-border border-round p-4 m-2">
        <h1 className="col-12 text-center my-3 fw-bold">Favorites</h1>
        <EcoursesGrid ecoursesData={favCourse} />
      </div>
    </>
  );
}

export default Favorites;
