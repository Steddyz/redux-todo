const { configureStore } = require("@reduxjs/toolkit");
import todoReducer from "./todoSlice";

export default configureStore({
  reducer: { todos: todoReducer },
});
