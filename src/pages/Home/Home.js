import React from "react";
import PartnerUniversitiesRec from "../../components/PartnerUniversities/partnerUniversities";
import SearchBar from "../../components/SearchBar/SearchBar";
import EcourseCardHome from "../../components/EcourseCardHomePage/EcourseCardHome";

function Home() {
  return (
    <div className="container-fluid">
      <SearchBar />
      <EcourseCardHome />
      <PartnerUniversitiesRec />
    </div>
  );
}

export default Home;
