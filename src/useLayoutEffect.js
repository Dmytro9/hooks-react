import React, { useLayoutEffect, useRef, useState } from "react";

const UseLayoutComponent = () => {
  const inputRef = useRef();
  const divRef = useRef();

  const [rect, setRect] = useState({});

  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect());
    setRect(divRef.current.getBoundingClientRect());
    return () => {};
  }, []);

  return (
    <div className="App">
      <button>Click</button> <input ref={inputRef} placeholder="name" />
      <div ref={divRef} style={{ display: "flex" }}>
        {Math.random()}
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
    </div>
  );
};

export default UseLayoutComponent;
