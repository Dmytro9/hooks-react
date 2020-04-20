import React, { useState, useEffect, useRef } from 'react';

const UserefComponent = () => {
  const inputRef = useRef();

  const isCurrent = useRef(true);

  const [count, setCount] = useState(1);

  useEffect(() => {
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  const handleClick = () => {
    inputRef.current.focus();

    setTimeout(() => {
      // resolve error when seting state on unmounted comnent
      if (isCurrent.current) {
        setCount(state => state + 1);
      }
    }, 2000);
  };

  return (
    <div className="App">
      <h1>useRef</h1>
      {count}
      <button onClick={handleClick}>Click</button>{' '}
      <input ref={inputRef} placeholder="name" />
    </div>
  );
};

export default UserefComponent;
