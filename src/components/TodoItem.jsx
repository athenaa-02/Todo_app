import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "./TodoSlice.js";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className="todo_parent">
      <div className="text_wrapper">
      <div className="todo_name">{todo.text}</div>
      <span>time</span>
      </div>
      <div className="btn_wrapper">
      <input type="checkbox" className="checkbox" />
      <button className="delete" onClick={() => dispatch(deleteTodo(todo.id))}>
        <img src="/public/delete.png" alt="" />
      </button>
    </div>
    </div>
  );
}

export default TodoItem;
