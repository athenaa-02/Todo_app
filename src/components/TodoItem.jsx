import { useDispatch } from "react-redux";
import { deleteTodo } from "./TodoSlice.js";
import { useState } from "react";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const checkboxClicked = () => {
    setChecked(!checked);
  };

  return (
    <div className="todo_parent">
      <div className="text_wrapper">
        <div className="todo_name">{todo.text}</div>
        <span>time</span>
      </div>
      <div className="btn_wrapper">
        <div className="checkbox_wrapper" onClick={checkboxClicked}>
          <figure style={{backgroundColor: checked ? "#20eeb0" : "transparent"}} className="checkbox">
            <img src="/public/tick.png.png" style={{display: checked ? "inline-block" :"none"}} alt="" />
          </figure>
        </div>
        <button
          className="delete"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          <img src="/public/delete.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
