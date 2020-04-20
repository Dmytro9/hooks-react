import React, { useState, useMemo } from 'react';
import { useFetch } from './useFetchHoock';

function computeLongestWord(fetchData) {
  if (!fetchData) {
    return [];
  }

  console.log('computeLongestWord()');
  let longestWord = '';
  const res = JSON.parse(fetchData);

  res.title.split(' ').forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

const UseMemoComponent = () => {
  const [count, setCount] = useState(0);
  const { data } = useFetch('https://jsonplaceholder.typicode.com/todos/1');

  const longestWord = useMemo(() => computeLongestWord(data), [data]);

  return (
    <div className="App">
      <h1>useMemo</h1>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>{longestWord}</div>
    </div>
  );
};

export default UseMemoComponent;
