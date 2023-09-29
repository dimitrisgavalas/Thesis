import React, { useState, useEffect } from "react";
import { EcoursesData } from "../../mock-d/EcoursesData";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import { Dropdown } from "primereact/dropdown";
import Filters from "../Filters/Filters";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";

function EcoursesGridFavorite() {
  const [ecourses, setEcourses] = useState([]);
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState(0);
  const [sortField, setSortField] = useState("");

  const header = () => {
    return <Filters />;
  };

  // slice=ecourses from object array we want to view in home page. .slice(0, 9)
  useEffect(() => {
    EcoursesData.getAllEcourses().then((data) => setEcourses(data));
  }, []);

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

  // when items are in Grid formation
  const gridItem = (ecourse) => {
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
              <Rating value={ecourse.rating} readOnly cancel={false}></Rating>
            </div>
          </Link>
          <div className="flex align-items-center justify-content-between">
            <span className="text-2xl font-semibold">€{ecourse.price}</span>
            <Button icon="pi pi-heart" className="p-button-rounded"></Button>
          </div>
        </div>
      </div>
    );
  };

  const itemTemplate = (ecourse) => {
    // If we the grid icon is pressed print ecourses as a grid.If not as a list
    return gridItem(ecourse);
  };

  return (
    <div className="card">
      <DataView
        // kouti me ta 'x'(ex.9) ecourses
        // globalFilterFields={["name", "category.name", "location"]}
        value={ecourses}
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

export default EcoursesGridFavorite;
