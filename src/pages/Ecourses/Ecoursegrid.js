import React, { useState } from "react";
import "./Ecourses.css";
import EcourseCard from "./EcourseCard";
import UniversityFilter from "./Filters";

function Ecourses() {
  // Sample e-courses data
  const ecourses = [
    {
      id: 1,
      title: "Introduction to Artificial Intelligence",
      image: img,
      university: "University of Piraeus",
      professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
      duration: "12 weeks",
      ECTS: 6,
      rating: 4.5,
      price: "$999",
      mode: "Online",
      description:
        "This is a comprehensive introduction to the field of artificial intelligence, covering topics such as machine learning, robotics, and natural language processing.",
    },
    {
      id: 2,
      title: "Introduction to Artificial Intelligence",
      image: img,
      university: "University of Piraeus",
      professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
      duration: "12 weeks",
      ECTS: 6,
      rating: 4.5,
      price: "$999",
      mode: "Online",
      description:
        "This is a comprehensive introduction to the field of artificial intelligence, covering topics such as machine learning, robotics, and natural language processing.",
    },
    {
      id: 3,
      title: "Introduction to Artificial Intelligence",
      image: img,
      university: "University of Piraeus",
      professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
      duration: "12 weeks",
      ECTS: 6,
      rating: 4.5,
      price: "$999",
      mode: "Online",
      description:
        "This is a comprehensive introduction to the field of artificial intelligence, covering topics such as machine learning, robotics, and natural language processing.",
    },
    {
      id: 4,
      title: "Introduction to Artificial Intelligence",
      image: img,
      university: "University of Piraeus",
      professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
      duration: "12 weeks",
      ECTS: 6,
      rating: 4.5,
      price: "$999",
      mode: "Online",
      description:
        "This is a comprehensive introduction to the field of artificial intelligence, covering topics such as machine learning, robotics, and natural language processing.",
    },
  ];

  // State for favorites
  const [favorites, setFavorites] = useState([]);

  // Toggle favorite e-course
  const toggleFavorite = (id) => {
    const isFavorited = favorites.includes(id);
    if (isFavorited) {
      setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="ecourses">
      <div className="filters">
        <UniversityFilter />
      </div>
      <div className="ecourse-cards">
        {ecourses.map((ecourse) => (
          <EcourseCard
            key={ecourse.id}
            ecourse={ecourse}
            toggleFavorite={toggleFavorite}
            isFavorited={favorites.includes(ecourse.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Ecourses;
