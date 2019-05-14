import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Todo = ({ todo, index, completeTodo }) => {
  return (
    <div
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
      className="todo"
      index={index}
    >
      {todo.text}
      <div>
        <button className="btn" onClick={() => completeTodo(index)}>
          Complete
        </button>
      </div>
    </div>
  );
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
        placeholder="Add Todo"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

const App = () => {
  const [todos, setTodo] = useState([
    {
      text: "Fedding my dogs",
      completed: false
    },
    {
      text: "Going to a grocery store",
      completed: false
    },
    {
      text: "Buying snacks",
      completed: false
    }
  ]);

  const addTodo = text => {
    const newTodo = [...todos, { text }];
    setTodo(newTodo);
  };

  const completeTodo = index => {
    const newTodo = [...todos];
    if (!todos[index].completed) {
      todos[index].completed = true;
    } else {
      todos[index].completed = false;
    }
    setTodo(newTodo);
  };

  return (
    <div className="todolist">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          index={index}
          completeTodo={completeTodo}
        />
      ))}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
