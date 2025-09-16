import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "./TodoSlice.js";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div style={{ width: "50px" }}>
      <input type="checkbox" />
      <span>{todo.text}</span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>delete</button>
    </div>
  );
}

export default TodoItem;
