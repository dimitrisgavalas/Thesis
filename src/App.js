import React from "react";
import ToolbarMenu from "./components/shared/Toolbar/Toolbar";
import GalleriaFullScreenDemos from "./components/PartnerUniversities/partnerUniversities";

// import Home from "./pages/Home";
// import Ecourses from "./pages/Ecourses";
// import About from "./pages/About";

function App() {
  return (
    <div className="container-fluid">
      <ToolbarMenu />
      <GalleriaFullScreenDemos />
    </div>
  );
}

export default App;
