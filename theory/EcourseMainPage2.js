//Test. H selida pou emfanizetai otan patame sto Ecourses-->Field.

import React, { useState, useEffect } from "react";
import "./EcourseMainPage.css";
import { EcoursesData } from "../src/mock-d/EcoursesData";
// import { Button } from "primereact/button";
// import { DataView, DataViewLayoutOptions } from "primereact/dataview";
// import { Rating } from "primereact/rating";
// import { Tag } from "primereact/tag";
// import Filters from "../../components/Filters/Filters";
import Card from "../src/components/EcoursesPages/Card";

function EcourseMainPage() {
  const [ecourse, setEcourse] = useState(EcoursesData);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">E-Courses</h1>
          <Card item={setEcourse} />
        </div>
      </div>
    </>
  );
}

export default EcourseMainPage;

// const [ecourses, setEcourses] = useState([]);
//   const [layout, setLayout] = useState("grid"); //to useState jekinaei me to grid

//   // slice=ecourses from object array we want to view in home page
//   useEffect(() => {
//     EcoursesData.getAllEcourses().then((data) => setEcourses(data));
//   }, []);

//   // Chips me "Online", "On Campus", "Hybrid"
//   const getLocation = (ecourse) => {
//     switch (ecourse.ecourseLocation) {
//       // prasino "On campus" chip panw dejia sto ecourse
//       case "On Campus":
//         return "success";

//       // kitrino "Online" chip panw dejia sto ecourse
//       case "Online":
//         return "warning";

//       // Kokkino "Hybrid" chip panw dejia sto ecourse
//       case "Hybrid":
//         return "danger";

//       default:
//         return null;
//     }
//   };

//   // when items are in Grid formation
//   const gridItem = (ecourse) => {
//     return (
//       <div className="pb-5 col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
//         <div className="p-4 border-1 surface-border surface-card border-round">
//           <div className="flex flex-wrap align-items-center justify-content-between gap-2">
//             <div className="flex align-items-center gap-2">
//               <i className="pi pi-book"></i>
//               {/* in span we add ecourse category. ex Programming, Education, Physics etc */}
//               <span className="font-semibold">{ecourse.category}</span>
//             </div>
//             {/* Chips me "Online", "On Campus", "Hybrid" */}
//             <Tag
//               value={ecourse.ecourseLocation}
//               // den allazoume to severity giati to xrwma twn chips ejartatai apo auth thn lejh
//               severity={getLocation(ecourse)}
//             ></Tag>
//           </div>

//           <div className="flex flex-column align-items-center gap-3 py-5">
//             <img
//               className="w-9 shadow-2 border-round"
//               src={ecourse.image}
//               alt={ecourse.title}
//             />
//             <div className="text-2xl font-bold">{ecourse.title}</div>
//             <Rating value={ecourse.rating} readOnly cancel={false}></Rating>
//           </div>
//           <div className="flex align-items-center justify-content-between">
//             <span className="text-2xl font-semibold">€{ecourse.price}</span>
//             <Button
//               icon="pi pi-heart"
//               className="p-button-rounded"
//               disabled={ecourse.ecourseLocation === "OUTOFSTOCK"}
//             ></Button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const itemTemplate = (ecourse, layout) => {
//     // If we the grid icon is pressed print ecourses as a grid.If not as a list
//     if (!ecourse) {
//       return;
//     }

//     if (layout === "list") return "error";
//     else if (layout === "grid") return gridItem(ecourse);
//   };

//   return (
//     <div className="card">
//       <Filters />
//       <DataView
//         // kouti me ta 'x'(ex.9) ecourses sthn arxikh
//         value={ecourses}
//         itemTemplate={itemTemplate}
//         layout={layout}
//       />
//     </div>
//   );
