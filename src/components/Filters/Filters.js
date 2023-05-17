import React from "react";
import "./Filters.css";
import { EcoursesData } from "../../mock-d/EcoursesData";

// EcoursesData.getUniversityName()
function UniversityFilter({ universities, onChange }) {
  return (
    <div className="filter">
      <label htmlFor="university">University:</label>
      <select id="university" onChange={onChange}>
        <option value="">All</option>
        {universities.map((university) => (
          <option key={university.id} value={university.id}>
            {university.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UniversityFilter;
