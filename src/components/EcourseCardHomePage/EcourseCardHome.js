import React, { useState, useEffect } from "react";
import { EcoursesData } from "../../mock-d/EcoursesData";
import { Button } from "primereact/button";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { Link } from 'react-router-dom';
import { Tag } from "primereact/tag";

function EcourseCardHome() {
  const [ecourses, setEcourses] = useState([]);
  const [layout, setLayout] = useState("grid"); //to useState jekinaei me to grid

  // slice=ecourses from object array we want to view in home page
  useEffect(() => {
    EcoursesData.getEcoursesHomePage().then((data) =>
      setEcourses(data.slice(0, 9))
    );
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

  // when items are in List formation
  const listItem = (ecourse) => {
    return (
      <div className="col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <img
            className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
            src={`https://primefaces.org/cdn/primereact/images/product/${ecourse.image}`}
            alt={ecourse.name}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{ecourse.name}</div>
              <Rating value={ecourse.rating} readOnly cancel={false}></Rating>
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{ecourse.category}</span>
                </span>
                {/* <Tag
                  value={ecourse.inventoryStatus}
                  severity={getLocation(ecourse)}
                ></Tag> */}
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">${ecourse.price}</span>
              <Button
                icon="pi pi-heart"
                className="p-button-rounded"
                disabled={ecourse.inventoryStatus === "OUTOFSTOCK"}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    );
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
            <Button
              icon="pi pi-heart"
              className="p-button-rounded"
              disabled={ecourse.ecourseLocation === "OUTOFSTOCK"}
            ></Button>
          </div>

        </div>

      </div >
    );
  };

  const itemTemplate = (ecourse, layout) => {
    // If we the grid icon is pressed print ecourses as a grid.If not as a list
    if (!ecourse) {
      return;
    }

    if (layout === "list") return listItem(ecourse);
    else if (layout === "grid") return gridItem(ecourse);
  };

  // button gia na allazei apo grid se lista
  const header = () => {
    return (
      <div className="flex justify-content-end">
        {/* might not add list */}
        {/* <DataViewLayoutOptions
          layout={layout}
          onChange={(e) => setLayout(e.value)}
        /> */}
      </div>
    );
  };

  return (
    <div className="card">
      <DataView
        // kouti me ta 'x'(ex.9) ecourses sthn arxikh
        value={ecourses}
        itemTemplate={itemTemplate}
        layout={layout}
        //button gia na allazei apo grid se lista
        header={header()}
      />
    </div>
  );
}

export default EcourseCardHome;

// import React from "react";

// function EcourseCard({ course }) {
//   return (
//     <div className="ecourse-card">
//       <h3>{course.title}</h3>
//       <p>Duration: {course.duration}</p>
//       <p>Price: {course.price}</p>
//       <p>Summary: {course.summary}</p>
//       <p>Start date: {course.startDate}</p>
//       <p>Professors: {course.professors.join(", ")}</p>
//       {/* Add social accounts links */}
//     </div>
//   );
// }

// export default EcourseCard;
