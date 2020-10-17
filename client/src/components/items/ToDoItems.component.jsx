import React from "react";
import ToDoItem from "../item/ToDoItem.component";

const ToDoItems = ({ items, handleCompletion }) => {
  return items ? (
    <ul>
      {items.map((item) => (
        <ToDoItem
          key={item.id}
          item={item}
          handleCompletion={handleCompletion}
        />
      ))}
    </ul>
  ) : null;
};

export default ToDoItems;
