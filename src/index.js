import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import UseStateComponent from "./useState";
import UseEffectComponent from "./useEffect";
import UserefComponent from "./useRef";

ReactDOM.render(
  <>
    <UseStateComponent />
    <UseEffectComponent />
    <UserefComponent />
  </>,
  document.getElementById("root")
);
