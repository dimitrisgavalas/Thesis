import React from "react";
// import EcourseCard from "./EcourseCard";
import "./Favorites.css";
import EcoursesGrid from "../EcoursesPages/Ecoursegrid";

function Favorites() {
  // This array will be replaced with the actual data fetched from the server/mock-d
  const favoriteCourses = [
    // Sample data
    {
      id: 1,
      title: "E-course 1",
      university: "University 1",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "E-course 2",
      university: "University 2",
      thumbnail: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="favorites-container">
      <h2>My Favorite E-courses</h2>
      <div>
        <EcoursesGrid />
      </div>
    </div>
  );
}

export default Favorites;
