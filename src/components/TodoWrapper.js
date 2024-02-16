import Header from "./Header";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
import { useEffect, useState } from "react";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const TodoWrapper = () => {
  const [todos, setTodos] = useState(getLocalStorage());

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (todo, description, dueDate) => {
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;

    const newTodo = {
      id: id,
      task: todo,
      description: description,
      dueDate: dueDate,
      completed: false,
      important: false,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
    console.log(todos);
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };
  const importantChecked = (id) => {
    let important = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            important: !todo.important,
          }
        : todo
    );

    important = important.sort((a, b) => b.important - a.important);
    setTodos(important);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTask = (task, description, dueDate, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task,
              description,
              dueDate,

              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  };
  const countCompleted = todos.filter((todo) => todo.completed === true).length;
  const countPending = todos.filter((todo) => todo.completed === false).length;

  return (
    <div className="TodoWrapper">
      <Header
        length={todos.length}
        countCompleted={countCompleted}
        countPending={countPending}
      />
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            importantChecked={importantChecked}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
