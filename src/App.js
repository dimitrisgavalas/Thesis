import React from "react";
import Home from "./pages/Home/Home";
import "./App.css";
import Footer from "./components/Footer/Footer";
import ToolbarMenu from "./components/Toolbar/Toolbar";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Contact from "./pages/Contact/Contact";
// import Home from "./pages/Home";
// import Ecourses from "./pages/Ecourses";
// import About from "./pages/About";

function App() {
  return (
    <div className="container-fluid">
      <ToolbarMenu />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {/* <Contact /> */}
      {/* me routing */}
      <Footer />
    </div>
  );
}

export default App;
// sta shared loading etc
