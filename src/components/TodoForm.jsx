import { useState } from 'react';

function TodoForm({ addTodo, clearAll }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div className="form-group">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
        className="form-control"
        placeholder="Write your plane!"
      />
      <br />
      <button className="btn btn-primary" onClick={handleSubmit}>
        Add To List
      </button>
      <button className="btn btn-danger" onClick={clearAll}>
        Clear Todo List
      </button>
    </div>
  );
}

export default TodoForm;
