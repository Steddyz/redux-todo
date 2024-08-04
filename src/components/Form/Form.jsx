import React from "react";

export default function Form({ text, setText, addTodo }) {
  return (
    <label>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
    </label>
  );
}
