import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";

const root = createRoot(document.getElementById("root"));
root.render(
  // lets you find common bugs in your components early during development.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import files & components

// ReactDOM.render(
//   // What to show
//   // <div>
//   //   <h1>Thesis First Step</h1>
//   //   <h2>Thesis Second Step</h2>
//   // </div>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,

//   // Where to show it
//   document.getElementById("root")
// );
