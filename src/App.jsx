import { useState, useEffect } from 'react';
import './todo.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos'));
    if (saved) setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() === '') return;
      const newTodo = {
      id: Date.now(),
      title: inputValue,
      complete: false,
       
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearAll = () => {
    setTodos([]);
    localStorage.removeItem('todos');
  };

  return (
    <div className="container">
      <h2>Todo List App</h2>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
      />

      <div>
        <button className="add-btn" onClick={addTodo}>Add To List</button>
        <button className="clear-btn" onClick={clearAll}>Clear From List  </button>
      </div>

      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`todo-item ${todo.complete ? 'completed' : ''}`}
          >
            <label>{todo.title}</label>
            <button
              className="complete-btn"
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.complete ? 'Uncomplete' : 'Complete'}
            </button>
            <button
              className="delete-btn"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
