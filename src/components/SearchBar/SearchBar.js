import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search e-courses..." />
      <button type="submit">Search</button>
    </div>
  );
}

export default SearchBar;
