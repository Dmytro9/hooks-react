import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import UseStateComponent from "./useState";
import UseEffectComponent from "./useEffect";
import UserefComponent from "./useRef";
import UseLayoutComponent from "./useLayoutEffect";
import UseCallbackComponent from "./useCallback";

ReactDOM.render(
  <>
    <UseStateComponent />
    <UseEffectComponent />
    <UserefComponent />
    <UseLayoutComponent />
    <UseCallbackComponent />
  </>,
  document.getElementById("root")
);
