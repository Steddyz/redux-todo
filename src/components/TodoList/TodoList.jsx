import React from "react";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ deleteTodo, ToggleCompleted }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          deleteTodo={deleteTodo}
          ToggleCompleted={ToggleCompleted}
        />
      ))}
    </ul>
  );
}
