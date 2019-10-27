import React from "react";
import { render } from "react-dom";
import "./stylesheets/index.css";
import App from "./App";

render(
  <React.Fragment>
    <App />
  </React.Fragment>,

  document.getElementById("root")
);
