import React from "react";
import ReactDOM from "react-dom";
import CheckboxRadio from "./CheckboxRadio";
import "antd/dist/antd.css";
import "./index.css";

const App = () => {
  return <CheckboxRadio />;
};

ReactDOM.render(<App />, document.getElementById("container"));
