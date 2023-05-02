import React from "react";
import Home from "./pages/Home/Home";
import "./App.css";
import Footer from "./components/Footer/Footer";
import ToolbarMenu from "./components/Toolbar/Toolbar";
// import Home from "./pages/Home";
// import Ecourses from "./pages/Ecourses";
// import About from "./pages/About";

function App() {
  return (
    <div className="container-fluid">
      <ToolbarMenu />
      <Home />
      {/* me routing */}
      <Footer />
    </div>
  );
}

export default App;
// sta shared loading etc
