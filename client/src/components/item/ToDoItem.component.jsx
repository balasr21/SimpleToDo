import React from "react";
import "./ToDoItem.styles.css";

const ToDoItem = ({ item, handleCompletion }) => {
  return (
    <div>
      <li className="task-item">
        <input
          className="todo-item-check"
          type="checkbox"
          onClick={() => handleCompletion(item)}
          defaultChecked={!item.isActive}
        />
        <span className="todo-item">{item.task}</span>
      </li>
    </div>
  );
};

export default ToDoItem;
