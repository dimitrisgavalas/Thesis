import React from "react";
import PartnerUniversitiesRec from "../../components/PartnerUniversities/PartnerUniversities";
import SearchBar from "../../components/SearchBar/SearchBar";
import EcourseCard from "../../components/EcourseCardHome/EcourseCard";
// import Footer from "../../components/Footer/Footer";
// import ToolbarMenu from "../../components/Toolbar/Toolbar";

function Home() {
  return (
    <div className="container-fluid">
      <SearchBar />
      <EcourseCard />
      <PartnerUniversitiesRec />
    </div>
  );
}

export default Home;
