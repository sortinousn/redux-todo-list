import { v4 } from "node-uuid";

export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: v4(),
  text,
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  id,
});
