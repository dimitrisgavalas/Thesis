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

function EcoursesGrid() {
  const [ecourses, setEcourses] = useState([]);
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState(0);
  const [sortField, setSortField] = useState("");

  const [filters, setFilters] = useState({
    university: null,
    location: null,
    fields: [],
  });

  const header = () => {
    return <Filters onFilter={handleFilters} />;
  };

  const handleFilters = (filterValues) => {
    setFilters(filterValues);
  };

  // Filter the ecourses based on the selected filters
  const filteredEcourses = ecourses.filter((ecourse) => {
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
            <Button
              icon="pi pi-heart"
              className="p-button-rounded"
              disabled={ecourse.ecourseLocation === "OUTOFSTOCK"}
            ></Button>
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
        globalFilterFields={["name", "category.name", "location"]}
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

// / const sortOptions = [
//   { label: "Price High to Low", value: "!price" },
//   { label: "Price Low to High", value: "price" },
// ];

// const onSortChange = (event) => {
//   const value = event.value;

//   if (value.indexOf("!") === 0) {
//     setSortOrder(-1);
//     setSortField(value.substring(1, value.length));
//     setSortKey(value);
//   } else {
//     setSortOrder(1);
//     setSortField(value);
//     setSortKey(value);
//   }
// };

// // Sample e-courses data
// const ecourses = [
//   {
//     id: 1,
//     title: "Introduction to Artificial Intelligence",
//     image: img,
//     university: "University of Piraeus",
//     professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
//     duration: "12 weeks",
//     ECTS: 6,
//     rating: 4.5,
//     price: "$999",
//     mode: "Online",
//     description:
//       "This is a comprehensive introduction to the field of artificial intelligence, covering topics such as machine learning, robotics, and natural language processing.",
//   },
//   {
//     id: 2,
//     title: "Introduction to Artificial Intelligence",
//     image: img,
//     university: "University of Piraeus",
//     professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
//     duration: "12 weeks",
//     ECTS: 6,
//     rating: 4.5,
//     price: "$999",
//     mode: "Online",
//     description:
//       "This is a comprehensive introduction to the field of artificial intelligence, covering topics such as machine learning, robotics, and natural language processing.",
//   },
//   {
//     id: 3,
//     title: "Introduction to Artificial Intelligence",
//     image: img,
//     university: "University of Piraeus",
//     professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
//     duration: "12 weeks",
//     ECTS: 6,
//     rating: 4.5,
//     price: "$999",
//     mode: "Online",
//     description:
//       "This is a comprehensive introduction to the field of artificial intelligence, covering topics such as machine learning, robotics, and natural language processing.",
//   },
//   {
//     id: 4,
//     title: "Introduction to Artificial Intelligence",
//     image: img,
//     university: "University of Piraeus",
//     professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
//     duration: "12 weeks",
//     ECTS: 6,
//     rating: 4.5,
//     price: "$999",
//     mode: "Online",
//     description:
//       "This is a comprehensive introduction to the field of artificial intelligence, covering topics such as machine learning, robotics, and natural language processing.",
//   },
// ];
// useEffect(() => {
//   EcoursesData.getProducts().then((data) => setProducts(data.slice(0, 12)));
// }, []);

// // State for favorites
// const [favorites, setFavorites] = useState([]);

// // Toggle favorite e-course
// const toggleFavorite = (id) => {
//   const isFavorited = favorites.includes(id);
//   if (isFavorited) {
//     setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
//   } else {
//     setFavorites([...favorites, id]);
//   }
// };
{
  /* <div className="ecourse-cards">
        {ecourses.map((ecourse) => (
          <EcourseCard
            key={ecourse.id}
            ecourse={ecourse}
            toggleFavorite={toggleFavorite}
            isFavorited={favorites.includes(ecourse.id)}
          />
        ))}
      </div> */
}

// // component gia to EcourseMainPage

// import React from "react";

// const Card = ({ item }) => {
//   // destructuring props
//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row justify-content-center">
//           {item.map((Val) => {
//             return (
//               <div
//                 className="col-md-4 col-sm-6 card my-3 py-3 border-0"
//                 key={Val.id}
//               >
//                 <div className="card-img-top text-center">
//                   <img src={Val.img} alt={Val.title} className="photo w-75" />
//                 </div>
//                 <div className="card-body">
//                   <div className="card-title fw-bold fs-4">
//                     {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
//                     {Val.price}
//                   </div>
//                   <div className="card-text">{Val.desc}</div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card;

//Test. H selida pou emfanizetai otan patame sto Ecourses-->Field.

// import React, { useState, useEffect } from "react";
// import "./EcourseMainPage.css";
// import { EcoursesData } from "../../mock-d/EcoursesData";

// function EcourseCard() {
//   const [ecourse, setEcourse] = useState(EcoursesData);
//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row">
//           <h1 className="col-12 text-center my-3 fw-bold">E-Courses</h1>
//           <Card item={setEcourse} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default EcourseCard;
