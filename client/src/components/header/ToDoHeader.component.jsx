import React from "react";
import ToDoItems from "../items/ToDoItems.component";
import AddAndFilter from "../add-item-filter-item/add-item-filter-item.component";

import {
  getItems,
  addItems,
  getExistingItems,
  setItems
} from "../../utils/items.utils";
import './ToDoHeader.styles.css';


class ToDoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textAttribute: "",
      addingTask: true,
      searchingTask: false,
      enableInput: true,
      placeholder: "Add Task",
      isAllFilter: true,
      isActiveFilter: false,
      isCompletedFilter: false,
      items: [],
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      function () {
        if (this.state.searchingTask) {
          this.setState({ items: getItems(this.state) });
        }
      }
    );
  };

  componentDidMount() {
    this.setState({ items: getExistingItems() });
  }

  handleSubmit = (e) => {
    if (e.key === "Enter" && this.state.addingTask) {
      addItems(e.target.value);
      this.setState({ items: getExistingItems() });
    }
  };

  handleCompletion = (item) => {
    
    const items = getExistingItems();
    items.map((i) => (i.id === item.id ? (i.isActive = !i.isActive) : i));
    setItems(items);
  };

  addTask = () => {
    
    if (this.state.enableInput && !this.state.addingTask) {
      
      this.setState({ addingTask: !this.state.addingTask });
      this.setState({ searchingTask: !this.state.searchingTask });
      this.setState({ placeholder: "Add task" });
    } else {
      
      this.setState({ enableInput: !this.state.enableInput });
    }
  };

  searchTask = () => {
    
    if (this.state.enableInput && !this.state.searchingTask) {
      this.setState(
        {
          searchingTask: !this.state.searchingTask,
          placeholder: "Search task",
          addingTask: !this.state.addingTask,
        },
        function () {
          this.setState({ items: getItems(this.state) });
        }
      );
    } else {
      this.setState({ enableInput: !this.state.enableInput });
    }
  };

  allFilter = () => {
    this.setState(
      {
        isActiveFilter: false,
        isAllFilter: true,
        isCompletedFilter: false,
      },
      function () {
        this.setState({ items: getItems(this.state) });
      }
    );
  };

  activeFilter = () => {
    

    this.setState(
      {
        isActiveFilter: true,
        isAllFilter: false,
        isCompletedFilter: false,
      },
      function () {
        this.setState({ items: getItems(this.state) });
      }
    );
    
  };

  completedFilter = () => {
    this.setState(
      {
        isActiveFilter: false,
        isAllFilter: false,
        isCompletedFilter: true,
      },
      function () {
        this.setState({ items: getItems(this.state) });
      }
    );
  };

  render() {
    
    return (
      <div className="todolist">
        <h1>Simple To Do App</h1>

        {this.state.enableInput ? (
          <input className="task-input"
            autoFocus
            type="text"
            name="textAttribute"
            value={this.state.textAttribute}
            placeholder={this.state.placeholder}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit}
          />
        ) : null}
        <ToDoItems
          items={this.state.items}
          handleCompletion={this.handleCompletion}
        />
        <AddAndFilter
          addTask={this.addTask}
          searchTask={this.searchTask}
          itemCount={this.state.items ? this.state.items.length : 0}
          allFilter={this.allFilter}
          activeFilter={this.activeFilter}
          completedFilter={this.completedFilter}
        />
      </div>
    );
  }
}

export default ToDoHeader;
