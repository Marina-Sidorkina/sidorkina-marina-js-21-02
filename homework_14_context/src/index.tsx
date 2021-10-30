import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

fetch("https://dummyapi.io/data/v1/user", {
  method: "GET",
  headers: new Headers({
    "app-id": "617d32e4477c9955936d6413",
    "page": "1",
    "limit": "5",
  }),
}).then((response) => response.json())
  .then((response) => console.log(response))
  .catch(console.error);

