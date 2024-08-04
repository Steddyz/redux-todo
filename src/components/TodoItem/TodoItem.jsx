import React from "react";

export default function TodoItem({
  id,
  completed,
  text,
  ToggleCompleted,
  deleteTodo,
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => ToggleCompleted(id)}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => deleteTodo(id)}>
        &times;
      </span>
    </li>
  );
}
