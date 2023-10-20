// Buttons at Footer connecting users to platforms Social Media
import React from "react";
import { Button } from "primereact/button";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footerEnd mt-3 pt-7 pb-7 flex justify-content-center border-2 surface-border border-round p-2 bg-white">
      <a href="https://www.ds.unipi.gr/" target="_blank" rel="noreferrer">
        {" "}
        {/* Add target="_blank" to open in a new tab */}
        <Button icon="pi pi-twitter" className="mr-2" />
      </a>
      <a href="https://www.ds.unipi.gr/" target="_blank" rel="noreferrer">
        {" "}
        {/* Add target="_blank" to open in a new tab */}
        <Button icon="pi pi-facebook" className="mr-2" />
      </a>
      <a href="https://www.ds.unipi.gr/" target="_blank" rel="noreferrer">
        {" "}
        {/* Add target="_blank" to open in a new tab */}
        <Button icon="pi pi-instagram" className="mr-2" />
      </a>

      {/* Add social media icons */}
    </footer>
  );
}

export default Footer;
