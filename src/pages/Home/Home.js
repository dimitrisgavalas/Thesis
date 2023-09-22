import React from "react";
import PartnerUniversitiesRec from "../../components/PartnerUniversities/partnerUniversities";
import SearchBar from "../../components/SearchBar/SearchBar";
import EcourseCardHome from "../../components/EcourseCardHomePage/EcourseCardHome";
// import Footer from "../../components/Footer/Footer";
// import ToolbarMenu from "../../components/Toolbar/Toolbar";

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
