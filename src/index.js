import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import UseStateComponent from "./useState";
import UseEffectComponent from "./useEffect";
import UserefComponent from "./useRef";
import UseLayoutComponent from "./useLayoutEffect";

ReactDOM.render(
  <>
    <UseStateComponent />
    <UseEffectComponent />
    <UserefComponent />
    <UseLayoutComponent />
  </>,
  document.getElementById("root")
);
