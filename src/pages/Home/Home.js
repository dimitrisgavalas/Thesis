import React from "react";
import ToolbarMenu from "../../components/shared/Toolbar/Toolbar";
import PartnerUniversities from "../../components/PartnerUniversities/PartnerUniversities";
import SearchBar from "../../components/SearchBar/SearchBar";
import EcourseCard from "../../components/EcourseCardHome/EcourseCard";
import Footer from "../../components/shared/Footer/Footer";

function Home() {
  return (
    <div className="container-fluid">
      <ToolbarMenu />
      <SearchBar />
      <EcourseCard />
      <PartnerUniversities />
      <Footer />
    </div>
  );
}

export default Home;
