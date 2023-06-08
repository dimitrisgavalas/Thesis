import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import EcourseCard from "./EcourseCard";
import "./Favorites.css";

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
    <div>
      <Header />
      <div className="favorites-container">
        <h2>My Favorite E-courses</h2>
        <div className="favorites-grid">
          {favoriteCourses.map((course) => (
            <EcourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Favorites;
