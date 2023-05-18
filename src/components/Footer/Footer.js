import React from "react";
import { Button } from "primereact/button";
// import "./Footer.css";

function Footer() {
  return (
    <footer className="m-2 down pt-7 pb-7 flex justify-content-center border-2 surface-border border-round p-2">
      <a href="/contact">
        {" "}
        <Button icon="pi pi-twitter" className="mr-2" />
      </a>
      <a href="/fb">
        {" "}
        <Button icon="pi pi-facebook" className="mr-2" />
      </a>
      <a href="/Instagram">
        {" "}
        <Button icon="pi pi-instagram" className="mr-2" />
      </a>

      {/* Add social media icons */}
    </footer>
  );
}

export default Footer;

// align-items-center
// justify-content-center //ta vazei kedro an exw kai to flex
// p-2//padding 2
//border-2 //border me paxos 2
//surface-border //border ginetai psilo diafano
// surface-card
//border-round //round border lol
// flex
