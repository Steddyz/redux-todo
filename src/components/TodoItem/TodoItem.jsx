import React from "react";
import { useDispatch } from "react-redux";
import { deleteByIdTodo } from "../../store/todoSlice";
import { toggleStatus } from "../../store/todoSlice";

export default function TodoItem({ id, completed, title }) {
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleStatus(id))}
      />
      <span>{title}</span>
      <span className="delete" onClick={() => dispatch(deleteByIdTodo(id))}>
        &times;
      </span>
    </li>
  );
}
