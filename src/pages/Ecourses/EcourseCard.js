import React from "react";
import { Image } from "primereact/image";

function EcourseCard({ ecourse, toggleFavorite, isFavorited }) {
  const img = ["images/thumbnail.png"];

  return (
    <div className="ecourse-card pt-2">
      {/* <img src={ecourse.thumbnail} alt={ecourse.title} /> */}
      <Image src={img} alt={ecourse.name} width="250" />

      <h3>{ecourse.title}</h3>
      <div className="university">{ecourse.university}</div>
      <button onClick={() => toggleFavorite(ecourse.id)}>
        {isFavorited ? "❤️" : "🤍"}
      </button>
      {/* Add other e-course information */}
    </div>
  );
}

export default EcourseCard;
