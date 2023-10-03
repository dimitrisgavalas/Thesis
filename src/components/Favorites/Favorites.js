import React, { useState, useEffect } from "react";
import EcoursesGrid from "../EcoursesPages/Ecoursegrid";
import { EcoursesData } from "../../mock-d/EcoursesData";

function Favorites() {
  const [ecoursesData, setEcoursesData] = useState([]);
  const [favoriteCourses, setFavoriteCourses] = useState([]);

  useEffect(() => {
    EcoursesData.getFavoriteEcourses().then((data) => {
      console.log(data); // Log the resolved data
      setEcoursesData(data);
    });
  }, []);

  const handleToggleFavorite = (ecourse) => {
    // Check if the course is already in favorites
    if (!favoriteCourses.some((favCourse) => favCourse.id === ecourse.id)) {
      // Add it to favorites
      const updatedFavorites = [...favoriteCourses, ecourse];
      setFavoriteCourses(updatedFavorites);

      // Update the favorites data in EcoursesData
      EcoursesData.updateFavoriteEcourses(updatedFavorites);

      // Update the local storage with the updated favorites
      localStorage.setItem(
        "favoriteEcourses",
        JSON.stringify(updatedFavorites)
      );
    }
  };

  return (
    <>
      <div className="border-1 surface-border border-round p-4 m-2">
        <h1 className="col-12 text-center my-3 fw-bold">E-Courses</h1>
        <EcoursesGrid
          ecoursesData={ecoursesData}
          onToggleFavorite={handleToggleFavorite}
        />
      </div>
    </>
  );
}

export default Favorites;
