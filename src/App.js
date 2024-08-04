import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Form from "./components/Form/Form";

function App() {
  const [text, setText] = useState("");

  const deleteTodo = (todoId) => {
    // setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const ToggleCompleted = (todoId) => {
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id !== todoId) return todo;
    //     return {
    //       ...todo,
    //       completed: !todo.completed,
    //     };
    //   })
    // );
  };

  return (
    <div className="App">
      <Form text={text} setText={setText} addTodo={addTodo} />

      <TodoList ToggleCompleted={ToggleCompleted} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
