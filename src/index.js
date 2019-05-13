import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Todo = ({ todo }) => {
  return <p className="todo">{todo.text}</p>;
};

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    console.log(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

const App = () => {
  const [todos, setTodo] = useState([
    {
      text: "Fedding my dogs"
    },
    {
      text: "Going to a grocery store"
    },
    {
      text: "Buying snacks"
    }
  ]);

  const addTodo = text => {
    const newTodo = [...todos, { text }];
    setTodo(newTodo);
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is about Hook</p>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} />
      ))}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
