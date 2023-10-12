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
