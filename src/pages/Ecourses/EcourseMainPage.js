import React from "react";
import { Link } from "react-router-dom";
import "./EcourseMainPage.css";
import { DataView } from "primereact/dataview";
import EcourseCardHome from "../../components/EcourseCardHome/EcourseCardHome";

function EcourseMainPage() {
  return (
    <div className="card">
      <h1>Hello</h1>
      <EcourseCardHome />
    </div>
  );
}

export default EcourseMainPage;
