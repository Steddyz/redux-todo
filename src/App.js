import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import { addTodo, fetchTodos } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <Form text={text} setText={setText} addTodo={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
