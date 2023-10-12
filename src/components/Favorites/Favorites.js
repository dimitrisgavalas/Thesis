import React, { useState, useEffect } from "react";
import EcoursesGrid from "../EcoursesPages/Ecoursegrid";
import { EcoursesData } from "../../mock-d/EcoursesData";

function Favorites() {
  const [ecoursesData, setEcoursesData] = useState([]);
  const [favCourses, setFavoriteCourses] = useState([]);

  useEffect(() => {
    EcoursesData.getAllEcourses().then((data) => {
      console.log(data); // Log the resolved data
      setEcoursesData(data);
    });
  }, []);

  // const selectedECourses = ecoursesData.filter((eCourse) => {
  //   return favoriteCourses.includes(parseInt(eCourse.id, 10));
  // });

  // const favoriteEcourses =
  //   EcoursesData.getFavoriteEcoursesData(selectedECourses); // Pass selectedECourses as an argument

  // const handleToggleFavorite = (ecourse) => {
  //   // Check if the course is already in favorites
  //   if (!favCourses.some((favCourse) => favCourse.id === ecourse.id)) {
  //     // Add it to favorites
  //     const updatedFavorites = [...favCourses, ecourse];
  //     setFavoriteCourses(updatedFavorites);

  //     // Update the favorites data in EcoursesData
  //     EcoursesData.updateFavoriteEcourses(updatedFavorites);

  //     // Update the local storage with the updated favorites
  //     localStorage.setItem(
  //       "favoriteEcourses",
  //       JSON.stringify(updatedFavorites)
  //     );
  //   }
  // };

  return (
    <>
      <div className="border-1 surface-border border-round p-4 m-2">
        <h1 className="col-12 text-center my-3 fw-bold">Favorites</h1>
        {/* <EcoursesGrid ecoursesData={selectedECourses} /> */}
      </div>
    </>
  );
}

export default Favorites;

// import React, { useState, useEffect } from "react";
// import EcoursesGrid from "../EcoursesPages/Ecoursegrid";
// import { EcoursesData } from "../../mock-d/EcoursesData";

// function Favorites({ favoriteCourses }) {
//   const [ecoursesData, setEcoursesData] = useState([]);

//   const [favoriteCourses, setFavoriteCourses] = useState(
//     JSON.parse(localStorage.getItem("favoriteCourses")) || []
//   );

//   // me to pou jekinaei to programma na emfanizontai ta favorites
//   useEffect(() => {
//     // Save the favorites list to localStorage whenever it changes
//     localStorage.setItem("favoriteCourses", JSON.stringify(favoriteCourses));

//     // Log the favorite courses whenever the list changes
//     console.log("Favorite courses:", favoriteCourses);
//   }, [favoriteCourses]);
//   useEffect(() => {
//     EcoursesData.getAllEcourses().then((data) => {
//       console.log(data); // Log the resolved data
//       setEcoursesData(data);
//     });
//   }, []);

//   const selectedECourses = ecoursesData.filter((eCourse) => {
//     return favoriteCourses.includes(parseInt(eCourse.id, 10));
//   });

//   const favoriteEcourses =
//     EcoursesData.getFavoriteEcoursesData(selectedECourses); // Pass selectedECourses as an argument

// const handleToggleFavorite = (ecourse) => {
//   // Check if the course is already in favorites
//   if (!favCourses.some((favCourse) => favCourse.id === ecourse.id)) {
//     // Add it to favorites
//     const updatedFavorites = [...favCourses, ecourse];
//     setFavoriteCourses(updatedFavorites);

//     // Update the favorites data in EcoursesData
//     EcoursesData.updateFavoriteEcourses(updatedFavorites);

//     // Update the local storage with the updated favorites
//     localStorage.setItem(
//       "favoriteEcourses",
//       JSON.stringify(updatedFavorites)
//     );
//   }
// };

//   return (
//     <>
//       <div className="border-1 surface-border border-round p-4 m-2">
//         <h1 className="col-12 text-center my-3 fw-bold">Favorites</h1>
//         <EcoursesGrid ecoursesData={selectedECourses} />
//       </div>
//     </>
//   );
// }

// export default Favorites;
