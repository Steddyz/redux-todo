import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../store/todoSlice";
import { toggleCompleted } from "../../store/todoSlice";

export default function TodoItem({ id, completed, text }) {
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleCompleted({ id }))}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => dispatch(deleteTodo({ id }))}>
        &times;
      </span>
    </li>
  );
}
