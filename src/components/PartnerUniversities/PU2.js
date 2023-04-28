import React from "react";
// import { Image } from "primereact/image";
import { Dropdown } from "primereact/dropdown";
import "primeicons/primeicons.css";

function PartnerUniversitiesRec() {
  return (
    <div className="relative z2" style={{ backgroundColor: "purple" }}>
      <div claclassNamess="section_inner relative">
        <h3 className="heading-s normal center">
          Trusted by hundreds of Universities worldwide:
        </h3>
        <div className="flex items-center justify-center">
          <ul className="companies list-reset flex items-center">
            <li className="mx3 flex items-center">
              <a href="https://jooble.org/" target="_blank">
                <i className="pi pi-user" style={{ fontSize: "2.5rem" }}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PartnerUniversitiesRec;

{
  /* <ul className="">
  <li className="">
    <a href="https://jooble.org/">
      <Dropdown
        dropdownIcon={<img alt="dropdown icon" src="/images/home.png" />}
      />
    </a>
  </li>
</ul> */
}
