import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

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
      <Form text={text} setText={setText} addTodo={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
