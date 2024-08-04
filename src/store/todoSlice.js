import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    deleteTodo(state, action) {},
    ToggleCompleted(state, action) {},
  },
});

export const { addTodo, deleteTodo, ToggleCompleted } = todoSlice.actions;

export default todoSlice.reducer;
