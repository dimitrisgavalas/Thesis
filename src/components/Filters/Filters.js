import React, { useState, useEffect } from "react";
import "./Filters.css";
import { EcoursesData } from "../../mock-d/EcoursesData";
import { Dropdown } from "primereact/dropdown";
import { DataView } from "primereact/dataview";
import { MultiSelect } from "primereact/multiselect";

// EcoursesData.getUniversityName()
function Filters() {
  const [sortOrder, setSortOrder] = useState(0);
  const [sortField, setSortField] = useState("");

  const [location, setLocation] = useState(null);
  const [field, setField] = useState(null);
  const [uni, setUni] = useState(null);
  const [sortKey, setSortKey] = useState("");

  // ARRAAY with Location FIlters
  const sortLocationOptions = [
    { label: "On Campus", value: "onCampus" },
    { label: "Hybrid", value: "hybrid" },
    { label: "Online", value: "online" },
  ];

  // ARRAAY with Uni FIlters
  const sortUniversityOptions = [
    { label: "University of Piraeus", value: "unipi" },
    {
      label: "National and Kapodistrian University of Athens",
      value: "uniath",
    },
    { label: "EMP", value: "emp" },
    { label: "Univesity of West Attics", value: "uniwa" },
    { label: "OPA", value: "opa" },
    { label: "Panteion University", value: "panteion" },
    { label: "Aristotle University of Thessaloniki", value: "unith" },
  ];

  // ARRAAY with Fields FIlters
  const sortFieldsOptions = [
    { label: "Programming", value: "programming" },
    { label: "Mathematics", value: "mathematics" },
    { label: "Physics", value: "physics" },
    { label: "Biology", value: "biology" },
    { label: "English", value: "english" },
    { label: "Greek", value: "greek" },
    { label: "Linguistics", value: "linguistics" },
    { label: "Psychology", value: "psychology" },
    { label: "History", value: "history" },
    { label: "Philosophy", value: "philosophy" },
    { label: "Engineering", value: "engineering" },
    { label: "Art", value: "art" },
  ];

  const onSortChange = (event) => {
    const value = event.value;

    if (value.indexOf("!") === 0) {
      setSortOrder(-1);
      setSortField(value.substring(1, value.length));
      setSortKey(value);
    } else {
      setSortOrder(1);
      setSortField(value);
      setSortKey(value);
    }
  };

  const header = () => {
    return (
      <div className="flex justify-content-between flex-wrap card-container">
        <div className="inline-block m-2">
          <MultiSelect
            value={location}
            // onChange={onSortChange}
            //option=array me epiloges
            options={sortLocationOptions}
            optionLabel="location"
            filter
            placeholder="Location"
            maxSelectedLabels={3}
            className="w-full md:w-20rem"
            // panelFooterTemplate={panelFooterTemplate}
          />
        </div>
        {/* <div className="inline-block m-2">
          <MultiSelect
            value={uni}
            onChange={onSortChange}
            //option=array me epiloges
            options={sortUniversityOptions}
            optionLabel="uni"
            filter
            placeholder="University"
            maxSelectedLabels={3}
            className="w-full md:w-20rem"
          />
        </div>
        <div className="inline-block m-2">
          <MultiSelect
            value={field}
            onChange={onSortChange}
            //option=array me epiloges
            options={sortFieldsOptions}
            optionLabel="field"
            filter
            placeholder="Fields"
            maxSelectedLabels={3}
            className="w-full md:w-20rem"
          />
        </div> */}
      </div>
    );
  };

  return (
    <div className="border-1 surface-border border-round p-4 m-2">
      <h1>Filters:</h1>
      <DataView sortField={sortField} sortOrder={sortOrder} header={header()} />
    </div>
  );
}

export default Filters;

//onchange=detects when the value of an input element changes.
