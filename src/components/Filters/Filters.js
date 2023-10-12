// filter allows users to filter eCourses based on university, location, fields.
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect"; // Import MultiSelect

function Filters(props) {
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedFields, setSelectedFields] = useState([]);

  // Dropdown options
  const universityOptions = [
    { label: "University of Piraeus", value: "University of Piraeus" },
    {
      label: "National and Kapodistrian University of Athens",
      value: "National and Kapodistrian University of Athens",
    },
    { label: "EMP", value: "EMP" },
    { label: "Univesity of West Attica", value: "Univesity of West Attica" },
    { label: "OPA", value: "OPA" },
    { label: "Panteion university", value: "Panteion university" },
    {
      label: "Aristotle University of Thessaloniki",
      value: "Aristotle University of Thessaloniki",
    },
  ];

  const locationOptions = [
    { label: "Online", value: "Online" },
    { label: "On Campus", value: "On Campus" },
    { label: "Hybrid", value: "Hybrid" },
  ];

  const fieldOptions = [
    { label: "Programming", value: "Programming" },
    { label: "Mathematics", value: "Mathematics" },
    { label: "Physics", value: "Physics" },
    { label: "Biology", value: "Biology" },
    { label: "English", value: "English" },
    { label: "Greek", value: "Greek" },
    { label: "Linguistics", value: "Linguistics" },
    { label: "Psychology", value: "MathemaPsychologytics" },
    { label: "History", value: "History" },
    { label: "Philosophy", value: "Philosophy" },
    { label: "Engineering", value: "Engineering" },
    { label: "Art", value: "Art" },
  ];

  // Event handler functions that get triggered when user selects filters
  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.value);
  };

  const handleFieldsChange = (e) => {
    setSelectedFields(e.value);
  };

  // Resets all selected filters to their initial state.
  const clearFilters = () => {
    setSelectedUniversity(null);
    setSelectedLocation(null);
    setSelectedFields([]);
  };

  // Calls the onFilter function provided as a prop, passing the selected
  // filter values as an object.
  const applyFilters = () => {
    const filters = {
      university: selectedUniversity,
      location: selectedLocation,
      fields: selectedFields,
    };
    props.onFilter(filters);
  };

  return (
    <div className="p-grid flex align-items-center gap-2">
      <div className="p-col">
        <Dropdown
          value={selectedUniversity}
          options={universityOptions}
          onChange={handleUniversityChange}
          placeholder="Select University"
        />
      </div>
      <div className="p-col">
        <Dropdown
          value={selectedLocation}
          options={locationOptions}
          onChange={handleLocationChange}
          placeholder="Select Location"
        />
      </div>

      <div className="p-col">
        <MultiSelect
          value={selectedFields}
          options={fieldOptions} //pinakas me fields
          onChange={handleFieldsChange}
          placeholder="Select Fields"
          // optionLabel="label"
          // optionValue="value"
        />
      </div>

      <div className="p-col ">
        <button
          className="p-button p-button-secondary mr-2"
          onClick={applyFilters}
        >
          Apply Filters
        </button>
        <button className="p-button p-button-secondary" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default Filters;

// const universityOptions = [
//   { label: "University of Piraeus", value: "University of Piraeus" },
//   {
//     label: "National and Kapodistrian University of Athens",
//     value: "National and Kapodistrian University of Athens",
//   },
//   { label: "EMP", value: "EMP" },
//   { label: "Univesity of West Attica", value: "Univesity of West Attica" },
//   { label: "OPA", value: "OPA" },
//   ,
//   { label: "Panteion university", value: "Panteion university" },
//   ,
//   {
//     label: "Aristotle University of Thessaloniki",
//     value: "Aristotle University of Thessaloniki",
//   },
//   ,
// ];const [universitiesGreek] = useState([
//     { name: "Πανεπιστήμιο Πειραιώς" },
//     { name: "Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών" },
//     { name: "Εθνικό Μετσόβιο Πολυτεχνείο" },
//     { name: "Πανεπιστήμιο Δυτικής Αττικής" },
//     { name: "Οικονομικό Πανεπιστήμιο Αθηνών" },
//     { name: "Πάντειο Πανεπιστήμιο" },
//     { name: "Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης" },
//   ]);

// const locationOptions = [
//   { label: "Online", value: "Online" },
//   { label: "On Campus", value: "On Campus" },
//   { label: "Hybrid", value: "Hybrid" },
// ];

// const fieldOptions = [
//   { label: "Programming", value: "Programming" },
//   { label: "Mathematics", value: "Mathematics" },
//   { label: "Physics", value: "Physics" },
//   { label: "Biology", value: "Biology" },
//   { label: "English", value: "English" },
//   { label: "Greek", value: "Greek" },
//   { label: "Linguistics", value: "Linguistics" },
//   { label: "Psychology", value: "MathemaPsychologytics" },
//   { label: "History", value: "History" },
//   { label: "Philosophy", value: "Philosophy" },
//   { label: "Engineering", value: "Engineering" },
//   { label: "Art", value: "Art" },
// ];

//   const [fieldsGreek] = useState([
//     { name: "Προγραμματισμός" },
//     { name: "Μαθηματικά" },
//     { name: "Φυσική" },
//     { name: "Βιολογία" },
//     { name: "Αγγλικά" },
//     { name: "Ελληνικά" },
//     { name: "Γλωσσολογία" },
//     { name: "Ψυχολογία" },
//     { name: "Ιστορία-Αρχαιολογία" },
//     { name: "Φιλοσοφία" },
//     { name: "Μηχανική" },
//     { name: "Τέχνη" },
//   ]);
//

//

//   // ARRAAY with Fields FIlters
//   const sortFieldsOptions = [
//     { label: "Programming", value: "programming" },
//     { label: "Mathematics", value: "mathematics" },
//     { label: "Physics", value: "physics" },
//     { label: "Biology", value: "biology" },
//     { label: "English", value: "english" },
//     { label: "Greek", value: "greek" },
//     { label: "Linguistics", value: "linguistics" },
//     { label: "Psychology", value: "psychology" },
//     { label: "History", value: "history" },
//     { label: "Philosophy", value: "philosophy" },
//     { label: "Engineering", value: "engineering" },
//     { label: "Art", value: "art" },
//   ];

//
