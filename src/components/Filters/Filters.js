import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect"; // Import MultiSelect

function Filters(props) {
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedFields, setSelectedFields] = useState([]);

  const universityOptions = [
    { label: "University of Piraeus", value: "University of Piraeus" },
    {
      label: "National and Kapodistrian University of Athens",
      value: "National and Kapodistrian University of Athens",
    },
    { label: "EMP", value: "EMP" },
    { label: "Univesity of West Attica", value: "Univesity of West Attica" },
    { label: "OPA", value: "OPA" },
    ,
    { label: "Panteion university", value: "Panteion university" },
    ,
    {
      label: "Aristotle University of Thessaloniki",
      value: "Aristotle University of Thessaloniki",
    },
    ,
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

  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.value);
  };

  const handleFieldsChange = (e) => {
    setSelectedFields(e.value);
  };

  const clearFilters = () => {
    setSelectedUniversity(null);
    setSelectedLocation(null);
    setSelectedFields([]);
  };

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
          options={fieldOptions}
          onChange={handleFieldsChange}
          placeholder="Select Fields"
          optionLabel="label"
          optionValue="value"
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
// ];

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

// import "./Filters.css";
// import React, { useState, useEffect } from "react";
// import { FilterMatchMode, FilterOperator } from "primereact/api";
// import { InputText } from "primereact/inputtext";
// import { EcoursesData } from "../../mock-d/EcoursesData";
// import { Rating } from "primereact/rating";
// import { Tag } from "primereact/tag";
// import { Button } from "primereact/button";
// import { DataView } from "primereact/dataview";
// import { Dropdown } from "primereact/dropdown";
// import { MultiSelect } from "primereact/multiselect"; //Selection filter
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";

// // EcoursesData.getUniversityName()
// function Filters() {
//   const [ecourses, setEcourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [globalFilterValue, setGlobalFilterValue] = useState("");
//   // all the filters on header
//   const [filters, setFilters] = useState({
//     global: { value: null, matchMode: FilterMatchMode.CONTAINS },
//     name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
//     category: { value: null, matchMode: FilterMatchMode.IN },
//     location: { value: null, matchMode: FilterMatchMode.EQUALS },
//   });

//   const [fieldsEnglish] = useState([
//     { name: "Programming" },
//     { name: "Mathematics" },
//     { name: "Physics" },
//     { name: "Biology" },
//     { name: "English" },
//     { name: "Greek" },
//     { name: "Linguistics" },
//     { name: "Psychology" },
//     { name: "History" },
//     { name: "Philosophy" },
//     { name: "Engineering" },
//     { name: "Art" },
//   ]);
//   const [universitiesEnglish] = useState([
//     { name: "University of Piraeus" },
//     { name: "National and Kapodistrian University of Athens" },
//     { name: "EMP" },
//     { name: "Univesity of West Attica" },
//     { name: "OPA" },
//     { name: "Panteion university" },
//     { name: "Aristotle University of Thessaloniki" },
//   ]);
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
//   const [universitiesGreek] = useState([
//     { name: "Πανεπιστήμιο Πειραιώς" },
//     { name: "Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών" },
//     { name: "Εθνικό Μετσόβιο Πολυτεχνείο" },
//     { name: "Πανεπιστήμιο Δυτικής Αττικής" },
//     { name: "Οικονομικό Πανεπιστήμιο Αθηνών" },
//     { name: "Πάντειο Πανεπιστήμιο" },
//     { name: "Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης" },
//   ]);
//   const [locations] = useState([
//     { name: "On Campus" },
//     { name: "Online" },
//     { name: "Hybrid" },
//   ]);

//   useEffect(() => {
//     EcoursesData.getAllEcourses().then((data) => {
//       setEcourses(getEcourses(data));
//       setLoading(false);
//     });
//   }, []);

//   // function takes an array of data, ensures it's a valid array
//   // (defaulting to an empty array if necessary), creates a shallow copy of the array to
//   //  avoid mutation, and then converts the date property of each element into a JavaScript
//   //  Date object. The modified array with updated date properties is then returned.
//   const getEcourses = (data) => {
//     return [...(data || [])].map((d) => {
//       d.date = new Date(d.date);

//       return d;
//     });
//   };

//   const onGlobalFilterChange = (e) => {
//     const value = e.target.value;
//     let _filters = { ...filters };

//     _filters["global"].value = value;

//     setFilters(_filters);
//     setGlobalFilterValue(value);
//   };

//   //Globar Search Bar
//   const renderHeader = () => {
//     return (
//       <div className="flex justify-content-end">
//         <span className="p-input-icon-left">
//           <i className="pi pi-search" />
//           {/* Global Search Bar */}
//           <InputText
//             value={globalFilterValue}
//             onChange={onGlobalFilterChange}
//             placeholder="Keyword Search"
//           />
//         </span>
//       </div>
//     );
//   };

//   const header = renderHeader();

//   return header;
// }
// export default Filters;

// const [fields] = useState(EcoursesData.getFieldName());

// const sortOptions = [
//   { label: "Price High to Low", value: "!price" },
//   { label: "Price Low to High", value: "price" },
// ];

//   // sorting by Price
//   const onSortChange = (event) => {
//     const value = event.value;
//     // descending
//     if (value.indexOf("!") === 0) {
//       setSortOrder(-1);
//       setSortField(value.substring(1, value.length));
//       setSortKey(value);
//       // ascending
//     } else {
//       setSortOrder(1);
//       setSortField(value);
//       setSortKey(value);
//     }
//   };

// slice=ecourses from object array we want to view in home page. .slice(0, 9)
// useEffect(() => {
//   EcoursesData.getAllEcourses().then((data) => setEcourses(data));
// }, []);

// {/* Onoma */}
// <Column
// field="name"
// header="Name"
// filter
// filterPlaceholder="Search by name"
// style={{ minWidth: "12rem" }}
// />
// {/* Field */}
// <Column
// header="Field" //Κατεύθυνση
// filterField="fields"
// showFilterMenu={false}
// filterMenuStyle={{ width: "14rem" }}
// style={{ minWidth: "14rem" }}
// body={fieldBodyTemplate}
// filter
// filterElement={fieldRowFilterTemplate}
// />
// {/* University */}
// <Column
// header="University" //Πανεπιστήμιο
// filterField="university"
// showFilterMenu={false}
// filterMenuStyle={{ width: "14rem" }}
// style={{ minWidth: "14rem" }}
// body={universityBodyTemplate}
// filter
// filterElement={universityRowFilterTemplate}
// />
// {/* Location */}
// <Column
// field="location"
// header="Location"
// showFilterMenu={false}
// filterMenuStyle={{ width: "14rem" }}
// style={{ minWidth: "12rem" }}
// body={locationBodyTemplate}
// filter
// filterElement={locationRowFilterTemplate}
// />
//onchange=detects when the value of an input element changes.
// ***************************************************************
// {
//   const [sortOrder, setSortOrder] = useState(0);
//   const [sortField, setSortField] = useState("");

//   const [location, setLocation] = useState(null);
//   const [field, setField] = useState(null);
//   const [uni, setUni] = useState(null);
//   const [sortKey, setSortKey] = useState("");

//   // ARRAAY with Location FIlters
//   const sortLocationOptions = [
//     { label: "On Campus", value: "onCampus" },
//     { label: "Hybrid", value: "hybrid" },
//     { label: "Online", value: "online" },
//   ];

//   // ARRAAY with Uni FIlters
//   const sortUniversityOptions = [
//     { label: "University of Piraeus", value: "unipi" },
//     {
//       label: "National and Kapodistrian University of Athens",
//       value: "uniath",
//     },
//     { label: "EMP", value: "emp" },
//     { label: "Univesity of West Attics", value: "uniwa" },
//     { label: "OPA", value: "opa" },
//     { label: "Panteion University", value: "panteion" },
//     { label: "Aristotle University of Thessaloniki", value: "unith" },
//   ];

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

//   const onSortChange = (event) => {
//     const value = event.value;

//     if (value.indexOf("!") === 0) {
//       setSortOrder(-1);
//       setSortField(value.substring(1, value.length));
//       setSortKey(value);
//     } else {
//       setSortOrder(1);
//       setSortField(value);
//       setSortKey(value);
//     }
//   };

//   const header = () => {
//     return (
//       <div className="flex justify-content-between flex-wrap card-container">
//         <div className="inline-block m-2">
//           <MultiSelect
//             value={location}
//             // onChange={onSortChange}
//             //option=array me epiloges
//             options={sortLocationOptions}
//             optionLabel="location"
//             filter
//             placeholder="Location"
//             maxSelectedLabels={3}
//             className="w-full md:w-20rem"
//             // panelFooterTemplate={panelFooterTemplate}
//           />
//         </div>
//         {/* <div className="inline-block m-2">
//           <MultiSelect
//             value={uni}
//             onChange={onSortChange}
//             //option=array me epiloges
//             options={sortUniversityOptions}
//             optionLabel="uni"
//             filter
//             placeholder="University"
//             maxSelectedLabels={3}
//             className="w-full md:w-20rem"
//           />
//         </div>
//         <div className="inline-block m-2">
//           <MultiSelect
//             value={field}
//             onChange={onSortChange}
//             //option=array me epiloges
//             options={sortFieldsOptions}
//             optionLabel="field"
//             filter
//             placeholder="Fields"
//             maxSelectedLabels={3}
//             className="w-full md:w-20rem"
//           />
//         </div> */}
//       </div>
//     );
//   };

//   return (
//     <div className="border-1 surface-border border-round p-4 m-2">
//       <h1>Filters:</h1>
//       <DataView sortField={sortField} sortOrder={sortOrder} header={header()} />
//     </div>
//   );}
