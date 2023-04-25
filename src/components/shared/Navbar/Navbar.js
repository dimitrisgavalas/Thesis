import React from "react";
import { Button } from "primereact/button";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Home, Ecourses, About } from "react";

function Navbar() {
  const leftContent = (
    <React.Fragment>
      <Button label="Menu" className="mr-2" />
      <Button label="Courses" className="p-button-success" />
      <Button label="About" className="p-button-success" />
    </React.Fragment>
  );
  return leftContent;
}

export default Navbar;

/* <nav className="nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/ecourses">E-Courses</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav> */

//     // Fragment = lets you group elements without a wrapper node.
//   <Fragment>
//   <Router>
//     <Routes>
//       <Route exact path="/" element={<Home />}></Route>
//       <Route exact path="/courses" element={<Ecourses />}></Route>
//       <Route exact path="/about" element={<About />}></Route>
//     </Routes>
//   </Router>
// </Fragment>
