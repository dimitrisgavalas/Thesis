import React, { useEffect, useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { EcoursesData } from "../../mock-d/EcoursesData"; // Make sure this import is correct
import "./SearchBar.css";

function SearchBar() {
  const [value, setValue] = useState("");
  const [ecourses, setEcourses] = useState([]);
  const [selectedEcourse, setSelectedEcourse] = useState(null);
  const [filteredEcourses, setFilteredEcourses] = useState(null);

  useEffect(() => {
    EcoursesData.getAllEcourses().then((data) => setEcourses(data));
  }, []);

  const search = (event) => {
    // Timeout to emulate a network connection
    setTimeout(() => {
      let _filteredEcourses;

      if (!event.query.trim().length) {
        _filteredEcourses = [...ecourses];
      } else {
        _filteredEcourses = ecourses.filter((ecourse) => {
          return ecourse.title
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }

      setFilteredEcourses(_filteredEcourses);
    }, 250);
  };

  return (
    <div className="container flex flex-column justify-content-center align-items-center">
      <div className="card flex justify-content-center pt-3 text-base">
        <AutoComplete
          field="title" // Change to the field you want to search by (e.g., "title")
          value={selectedEcourse}
          suggestions={filteredEcourses}
          completeMethod={search}
          onChange={(e) => setSelectedEcourse(e.value)}
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default SearchBar;

{
  // const categories = ["economics", "programming", "marketing"];
  /* <div className="chip-container text-500 text-xl pt-5 flex gap-2">
        {categories.map((item) => (
          <Chip key={item} label={item} />
        ))}
      </div> */
}
