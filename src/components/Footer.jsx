export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className="footer">
      <span className="item"> Completed Todos: {completedTodos}</span>
      <span className="item">Total Todos: {totalTodos}</span>
    </div>
  );
}
