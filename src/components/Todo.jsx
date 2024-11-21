import { useState } from "react";
import TodoItem from "./TodoItem";
import Footer from "./Footer";

export default function Todo() {
  const [todo, setTodo] = useState({ name: "", done: false }); // single todo state
  const [todos, setTodos] = useState([]); // set list of todos in array
  function handleSubmit(e) {
    //the e stands for event
    e.preventDefault(); //to prevent default refresh after submitting form
    setTodos([...todos, todo]); // use spread operator to retain the list of todos and add the new todo
    setTodo({ name: "", done: false }); //to clear input field after adding
  }

  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  const sortedTodos = todos
    .slice() //to ccopy array
    .sort((a, b) => Number(a.done) - Number(b.done)); //sort and rreturn sorted array

  return (
    <div>
      <form onSubmit={handleSubmit} className="for">
        <div className="inputContainer">
          <input
            className="inputMe"
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
            type="text"
            placeholder="Enter Todo Item"
          />
          <button className="modernButton" type="submit">
            add
          </button>
        </div>
      </form>
      <div className="todoList">
        {sortedTodos.map((item) => (
          <TodoItem
            key={item.name}
            item={item}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
