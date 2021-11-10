import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css';
import "./index.scss";
import App from "./components/app/App";

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
let today = new Date()
console.log(new Date(1999, 11, 12) < today);
console.log("11.12.1999".split(".").map((item: string) => parseInt(item, 10)));