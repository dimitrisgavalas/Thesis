import React from "react";
import Filters from "../../components/Filters/Filters";
import EcourseCard from "../../components/EcoursesPages/EcoursesCard";

function Home() {
  return (
    <div className="container-fluid">
      <Filters />
      <EcourseCard />
    </div>
  );
}

export default Home;
