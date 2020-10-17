import React from "react";
import ToDoItem from "../item/ToDoItem.component";

const ToDoItems = ({ items , handleCompletion}) => {
  
  console.log("Items called ");
  return (
    <ul>
      {items.map((item) => (
        <ToDoItem key={item.id} item={item} handleCompletion={handleCompletion}/>
      ))}
    </ul>
  );
};


export default ToDoItems;
