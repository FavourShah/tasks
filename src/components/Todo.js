import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const Todo = ({
  task,
  toggleComplete,
  deleteTodo,
  editTodo,
  importantChecked,
}) => {
  return (
    <div className={`Todo ${task.important ? "important" : ""}`}>
      <div> {task.dueDate}</div>
      <div className={`task ${task.completed ? "completed" : ""}`}>
        <IoCheckmarkDoneCircleOutline
          onClick={() => toggleComplete(task.id)}
          className="done-btn"
        />

        <div> {task.task}</div>
        <div> {task.description}</div>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faCircleExclamation}
          onClick={() => importantChecked(task.id)}
          className="important-btn"
        />
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
          className="edit-btn"
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
          className="delete-btn"
        />
      </div>
    </div>
  );
};

export default Todo;
