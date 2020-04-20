import React, { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'add-todo':
      return {
        todos: [...state.todos, { text: action.text, completed: false }], // see use-immer to handle with complex objects
        todoCount: state.todoCount + 1
      };

    case 'toggle-todo':
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        ),
        todoCount: state.todoCount
      };

    default:
      return state;
  }
}

// if the state is complex object it's better to use useReducer instead of useState in component

const UseReducerComponent = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0
  }); // could be a function (second param)
  const [text, setText] = useState('');

  return (
    <div className="App">
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: 'add-todo', text });
          setText('');
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      <div>number of todos: {todoCount}</div>
      {todos.map((t, idx) => (
        <div
          key={idx}
          onClick={() => dispatch({ type: 'toggle-todo', idx })}
          style={{ textDecoration: t.completed ? 'line-through' : '' }}
        >
          {t.text}
        </div>
      ))}
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
};

export default UseReducerComponent;
