import React from "react";
import ToolbarMenu from "../../components/shared/Toolbar/Toolbar";
import PartnerUniversities from "../../components/PartnerUniversities/PartnerUniversities";
import SearchBar from "../../components/SearchBar/SearchBar";
import EcourseCard from "../../components/EcourseCardHome/EcourseCard";

function Home() {
  return (
    <div className="container-fluid">
      <ToolbarMenu />
      <SearchBar />
      <EcourseCard />
      <PartnerUniversities />
    </div>
  );
}

export default Home;
