import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetchHoock';

const UseStateComponent = () => {
  // invocs on every render, add param [will invoce when this value/s is/are changing]->
  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove); // clean event listener
  //   };
  // }, []); // add param

  const [count, setCount] = useState(
    () => JSON.parse(localStorage.getItem('count')) // with fn to not invoce on evety render
  );
  const handleClick = () => setCount(currentCount => currentCount + 1);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  return (
    <div className="App">
      <h1>useEffect</h1>
      <button onClick={handleClick}>Click</button>{' '}
      {loading ? 'loading...' : data}
    </div>
  );
};

export default UseStateComponent;
