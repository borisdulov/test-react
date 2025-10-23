import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import App from "./App";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element with id 'root' was not found.");
}

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
