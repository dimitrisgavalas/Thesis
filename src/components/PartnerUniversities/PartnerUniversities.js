import React from "react";
import "./PartnerUniversities.css";

function PartnerUniversities({ universities }) {
  return (
    <div className="partner-universities">
      <h2>Partner Universities</h2>
      <ul>
        {universities.map((university, index) => (
          <li key={index}>{university}</li>
        ))}
      </ul>
    </div>
  );
}

export default PartnerUniversities;
