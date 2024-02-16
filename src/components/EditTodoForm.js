import { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [text, setText] = useState(task.task);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const handleSubmit = (e) => {
    e.preventDefault();
    /*   if (!value) {
      alert("Please add a task");
      return;
    } */
    editTodo(text, description, dueDate, task.id);
    setText("");
    setDescription("");
    setDueDate("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        className="todo-input"
        placeholder="Add Day & Time"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        className="todo-input"
        placeholder="Add Date"
        min="2024-01-01"
        max="2035-12-31"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button type="submit" className="todo-btn">
        UPDATE TASK
      </button>
    </form>
  );
};

export default EditTodoForm;
