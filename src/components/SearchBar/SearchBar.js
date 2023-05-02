import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { Chip } from "primereact/chip";

import "./SearchBar.css";

function SearchBar() {
  const categories = ["economics", "programming", "marketing"];

  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const search = (event) => {
    setItems([...Array(10).keys()].map((item) => event.query + "-" + item));
  };

  return (
    <div className="container flex flex-column justify-content-center align-items-center">
      <div className="card flex justify-content-center pt-3 ">
        <AutoComplete
          value={value}
          suggestions={items}
          completeMethod={search}
          onChange={(e) => setValue(e.value)}
        />
      </div>
      <div className="chip-container text-500 text-xl pt-5 flex gap-2">
        {categories.map((item) => (
          <Chip key={item} label={item} />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
