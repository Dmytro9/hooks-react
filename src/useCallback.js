import React, { useCallback, useState } from 'react';
import { Hello } from './Hello.component';
import { Square } from './Square';

const UseCallbackComponent = () => {
  const [count, setCount] = useState(0);
  const favoriteNums = [7, 21, 37];

  // prevent rerender <Hello /> component
  const increment = useCallback(
    n => {
      setCount(currentCount => currentCount + n);
    },
    [setCount]
  );

  return (
    <div className="App">
      <h1>UseCallbackComponent</h1>
      <Hello increment={increment} />
      <div>count: {count}</div>
      {favoriteNums.map(m => {
        return <Square key={m} increment={increment} n={m} />;
      })}
    </div>
  );
};

export default UseCallbackComponent;
