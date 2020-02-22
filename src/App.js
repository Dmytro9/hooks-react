import React, { useState } from 'react';
import './App.css';

function expensiveInitialState() {
  return 10;
}

const App = () => {
  const [count, setCount] = useState(10);
  // const [count, setCount] = useState(() => expensiveInitialState());

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>+</button>
      <div>{count}</div>
    </div>
  );
};

export default App;
