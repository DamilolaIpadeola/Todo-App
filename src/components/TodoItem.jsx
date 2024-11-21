export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
    //get the list of all todos, loop through, filter trhough all the todos to get a single item
  }

  function handleClick(name) {
    const newArray = todos.map(
      (
        todo //take the current item, map through each item and find the item currently clicked
      ) => (todo.name === name ? { ...todo, done: !todo.done } : todo) // loop through check the name pass, then set the done to the opposite value
    );
    setTodos(newArray);
  }

  const className = item.done ? "completed" : ""; //strike out clicked item if is done

  return (
    <div className="todoItem">
      <div className="itemName">
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span className="buttons">
          <button onClick={() => handleDelete(item)} className="deleteButton">
            Delete
          </button>

          <button onClick={() => handleClick(item.name)} className="doneButton">
            Done
          </button>
        </span>
      </div>

      <hr className="line" />
    </div>
  );
}
