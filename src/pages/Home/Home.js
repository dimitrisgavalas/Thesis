import React from "react";
import ToolbarMenu from "../../components/Toolbar/Toolbar";
import PartnerUniversities from "../../components/PartnerUniversities/PartnerUniversities";
import SearchBar from "../../components/SearchBar/SearchBar";
import EcourseCard from "../../components/EcourseCardHome/EcourseCard";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="container-fluid">
      <SearchBar />
      <EcourseCard />
      <PartnerUniversities />
    </div>
  );
}

export default Home;
