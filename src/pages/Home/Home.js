import React from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import EcourseCard from "../../components/EcourseCard";
import PartnerUniversities from "../../components/PartnerUniversities";
import Footer from "../../components/Footer";
import "./Home.css";

// Sample e-courses data
const ecourses = [
  // Add e-course objects here
];

// Sample partner universities data
const partnerUniversities = [
  // Add university names here
];

function Home() {
  return (
    <div className="home">
      <Header />
      <SearchBar />
      <div className="ecourse-cards">
        {ecourses.map((course, index) => (
          <EcourseCard key={index} course={course} />
        ))}
      </div>
      <PartnerUniversities universities={partnerUniversities} />
      <Footer />
    </div>
  );
}

export default Home;
