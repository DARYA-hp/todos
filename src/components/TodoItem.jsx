function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={`well ${todo.complete ? 'uncompleted' : 'completed'}`}>
      <label>{todo.title}</label>
      <button
        className="btn btn-success"
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.complete ? 'UnComplete' : 'Complete'}
      </button>
      <button
        className="btn btn-danger"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
