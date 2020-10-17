import React from "react";
import { ReactComponent as AddIcon } from "../../assets/add.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import "../add-item-filter-item/add-item-filter-item.styles.css";

const AddAndFilter = ({
  addTask,
  searchTask,
  itemCount = 0,
  allFilter,
  activeFilter,
  completedFilter,
}) => {
  return (
    <div className="container">
      <div className="add-search">
        <AddIcon className="add-icon button" onClick={addTask} />
        <SearchIcon className="search-icon button" onClick={searchTask} />
      </div>
  <div className="item-count">{itemCount} left</div>

      <ul className="filters">
        <li className="list-item" onClick={allFilter}>All</li>
        <li className="list-item" onClick={activeFilter}>Active</li>
        <li className="list-item" onClick={completedFilter}>Completed</li>
      </ul>
    </div>
  );
};

export default AddAndFilter;
