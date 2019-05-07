import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ModelManager, ModelClient } from "@adobe/cq-spa-page-model-manager";
import "bootstrap/dist/css/bootstrap.min.css";

function render(model) {
  ReactDOM.render(<App />, document.getElementById("root"));
}

document.addEventListener("DOMContentLoaded", () => {
  ModelManager.initialize().then(model => {
    render(model);
  });
});
