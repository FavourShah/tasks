import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(text, description, dueDate);

    setText("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What Do You Want To Do?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="text"
        className="todo-input"
        placeholder="Extra Details/Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        className="todo-input"
        min="2024-01-01"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button type="submit" className="todo-btn">
        ADD TASK
      </button>
    </form>
  );
};

export default TodoForm;
