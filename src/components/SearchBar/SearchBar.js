// SearchBar for finding eCourses based on user input.
import React, { useEffect, useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { EcoursesData } from "../../mock-d/EcoursesData"; // Make sure this import is correct
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./SearchBar.css";

function SearchBar() {
  const [ecourses, setEcourses] = useState([]);
  const [selectedEcourse, setSelectedEcourse] = useState(null);
  const [filteredEcourses, setFilteredEcourses] = useState(null);
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  // Fetches all eCourses using EcourcesData when the component mounts and stores the data
  // in the ecourses state.
  useEffect(() => {
    EcoursesData.getAllEcourses().then((data) => setEcourses(data));
  }, []);

  // Function is invoked when the user types in the search bar.
  // filters the eCourses based on the user's input.
  // filtered eCourses are stored in the filteredEcourses state.
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

  // This function is called when a user selects an eCourse from the AutoComplete dropdown.
  const onEcourseSelect = (ecourse) => {
    // Handle ecourse selection here, for example, redirect to the ecourse page
    navigate(`/singleEcourse/${ecourse.id}`); // Assuming you have a route like "/ecourse/:id"
  };

  return (
    <div className="border-round container flex flex-column justify-content-center align-items-center">
      <div className="card flex justify-content-center pt-3 text-base">
        <AutoComplete
          field="title" // Specifies that the title field of eCourses should be used for displaying suggestions.
          value={selectedEcourse} // Manages the selected eCourse.
          suggestions={filteredEcourses} // list of suggestions based on the user's input.
          completeMethod={search} //Calls the search function for suggesting eCourses.
          onChange={(e) => setSelectedEcourse(e.value)} //Handles the input change and updates the selected eCourse.
          placeholder="Search Ecourses"
          onSelect={(e) => onEcourseSelect(e.value)} // Handle the selection event
        />
      </div>
    </div>
  );
}

export default SearchBar;
