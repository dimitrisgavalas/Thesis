//Displays a grid of eCourses.

import React, { useState, useEffect } from "react";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import Filters from "../Filters/Filters";
import { Link } from "react-router-dom";
// import { EcoursesData } from "../../mock-d/EcoursesData";

function EcoursesGrid({ ecoursesData }) {
  console.log("bbbbbbbbbbbbbbbb", ecoursesData);

  const [sortOrder, setSortOrder] = useState(0);
  const [sortField, setSortField] = useState("");
  // Create a state to track the active state for each course
  const [activeCourses, setActiveCourses] = useState({});
  // Store filters criteria on header
  const [filters, setFilters] = useState({
    university: null,
    location: null,
    fields: [],
  });
  // Initialize the favorites list(courses that have red heart) from localStorage
  const [favoriteCourses, setFavoriteCourses] = useState(
    JSON.parse(localStorage.getItem("favoriteCourses")) || []
  );
  // localStorage.clear();

  // As soon as the app starts favorites appear(button=red). Also, watches for
  // changes in the favoriteCourses state and stores it in localStorage
  useEffect(() => {
    // Save the favorites list to localStorage whenever it changes
    localStorage.setItem("favoriteCourses", JSON.stringify(favoriteCourses));

    // Log the favorite courses whenever the list changes
    console.log("Favorite courses:", favoriteCourses);
  }, [favoriteCourses]);

  // 1. function used to handle clicks on the favorite button for each eCourse.
  // 2. checks whether the clicked eCourse is already a favorite and adds/removes
  //  it from the list of favorites accordingly.
  // 3. toggles the active state for the clicked course.
  // 4. It calls EcoursesData.getFavoriteEcoursesData to potentially use the
  // updated favoriteCourses array for further processing, such as
  // displaying favorite courses on a favorites page.
  const handleClick = (ecourseId) => {
    // 'ecourseId' when the button is clicked. Display all courses in the favorites
    console.log(`Button clicked for ecourse with ID: ${ecourseId}`);

    // Check if the course is already a favorite
    const isFavorite = favoriteCourses.includes(ecourseId);

    // Add or remove the course from the favorites list
    if (!isFavorite) {
      // Add to favorites
      setFavoriteCourses((prevFavorites) => [...prevFavorites, ecourseId]);
      console.log(`Course with ID ${ecourseId} added to favorites.`);
    } else {
      // Remove from favorites
      setFavoriteCourses((prevFavorites) =>
        prevFavorites.filter((id) => id !== ecourseId)
      );

      console.log(`Course with ID ${ecourseId} removed from favorites.`);
    }

    // Toggle the active state for this course
    setActiveCourses((prevActiveCourses) => ({
      ...prevActiveCourses,
      [ecourseId]: !prevActiveCourses[ecourseId],
    }));
  };

  // Filter component on header based on university, location, and fields.
  const header = () => {
    return <Filters onFilter={handleFilters} />;
  };

  // Used to update the filters state based on user-selected filter values.
  const handleFilters = (filterValues) => {
    setFilters(filterValues);
  };

  // Contains the eCourses that match the selected filters.
  // ecoursesData prop is the data we use
  const filteredEcourses = ecoursesData.filter((ecourse) => {
    if (filters.university && ecourse.university !== filters.university) {
      return false;
    }
    if (filters.location && ecourse.ecourseLocation !== filters.location) {
      return false;
    }
    if (
      filters.fields.length > 0 &&
      !filters.fields.includes(ecourse.category)
    ) {
      return false;
    }
    return true;
  });

  // Chips me "Online", "On Campus", "Hybrid"
  const getLocation = (ecourse) => {
    switch (ecourse.ecourseLocation) {
      // prasino "On campus" chip panw dejia sto ecourse
      case "On Campus":
        return "success";

      // kitrino "Online" chip panw dejia sto ecourse
      case "Online":
        return "warning";

      // Kokkino "Hybrid" chip panw dejia sto ecourse
      case "Hybrid":
        return "danger";

      default:
        return null;
    }
  };

  // Renders an individual eCourse as a grid item.
  const gridItem = (ecourse) => {
    const isCourseActive = activeCourses[ecourse.id];
    const isFavorite = favoriteCourses.includes(ecourse.id);
    return (
      <div className="pb-5 col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
        <div className="p-4 border-1 surface-border surface-card border-round">
          <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <div className="flex align-items-center gap-2">
              <i className="pi pi-book"></i>
              {/* in span we add ecourse category. ex Programming, Education, Physics etc */}
              <span className="font-semibold">{ecourse.category}</span>
            </div>
            {/* Chips me "Online", "On Campus", "Hybrid" */}
            <Tag
              value={ecourse.ecourseLocation}
              // den allazoume to severity giati to xrwma twn chips ejartatai apo auth thn lejh
              severity={getLocation(ecourse)}
            ></Tag>
          </div>
          <Link to={`/singleEcourse/${ecourse.id}`}>
            <div className="flex flex-column align-items-center gap-3 py-5">
              <img
                className="w-9 shadow-2 border-round"
                src={ecourse.image}
                alt={ecourse.title}
              />
              <div className="text-2xl font-bold">{ecourse.title}</div>
              {/* rating pou fainetai sta courses */}
              <Rating value={ecourse.rating} readOnly cancel={false}></Rating>
            </div>
          </Link>
          <div className="flex align-items-center justify-content-between">
            <span className="text-2xl font-semibold">€{ecourse.price}</span>
            <Button
              icon="pi pi-heart"
              className="p-button-rounded"
              disabled={ecourse.ecourseLocation === "OUTOFSTOCK"}
              style={{
                backgroundColor: isFavorite ? "red" : "",
              }}
              onClick={() => handleClick(ecourse.id)}
            ></Button>
          </div>
        </div>
      </div>
    );
  };

  // Function is used as the template for each eCourse item, which can be
  // displayed as a grid item.
  const itemTemplate = (ecourse) => {
    // If we the grid icon is pressed print ecourses as a grid.If not as a list
    return gridItem(ecourse);
  };

  return (
    <div className="card">
      <DataView
        // kouti me ta 'x'(ex.9) ecourses
        // globalFilterFields={["name", "category.name", "location"]}
        value={filteredEcourses}
        itemTemplate={itemTemplate}
        paginator
        rows={9}
        sortField={sortField}
        sortOrder={sortOrder}
        header={header()}
      />
    </div>
  );
}

export default EcoursesGrid;

// To do Update notes: 1. change grid code to acomponent with a prop of ecourse
