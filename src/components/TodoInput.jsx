import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./TodoSlice.js";

function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Note"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
}

export default TodoInput;
