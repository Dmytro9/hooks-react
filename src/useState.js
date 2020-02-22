import React, { useState } from 'react';

// function expensiveInitialState() {
//   return 10;
// }

const initCreds = {
  email: '',
  password: ''
};

const UseStateComponent = () => {
  // const [count, setCount] = useState(10);
  // const [count, setCount] = useState(() => expensiveInitialState());

  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });

  const [form, setCreds] = useState(initCreds);

  const handleClick = () => {
    setCount(currentState => ({
      ...currentState,
      count: currentState.count + 1
    }));
  };

  const handleChange = e => {
    setCreds({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="App">
      <button onClick={handleClick}>+</button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
      <input name="email" value={form.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default UseStateComponent;
